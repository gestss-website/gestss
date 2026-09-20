import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { isEmailAuthorizedAdmin, ALLOWED_ADMIN_EMAILS } from '@/lib/adminWhitelist';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (!isFirebaseConfigured() || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Verify against strict admin whitelist
        if (isEmailAuthorizedAdmin(user.email)) {
          setAdminUser(user);
          setAuthError('');
        } else {
          // Unauthorized email: automatically sign out
          await firebaseSignOut(auth);
          setAdminUser(null);
          setAuthError(`Access Denied: '${user.email}' is not in the authorized admin whitelist.`);
        }
      } else {
        setAdminUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setAuthError('');
    if (!isFirebaseConfigured() || !auth) {
      throw new Error('Firebase configuration is missing. Please add your credentials in .env');
    }

    // Pre-check whitelist
    if (!isEmailAuthorizedAdmin(email)) {
      const err = new Error(`Access Denied: '${email}' is not authorized to access this admin portal.`);
      setAuthError(err.message);
      throw err;
    }

    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      // Double check after login
      if (!isEmailAuthorizedAdmin(cred.user.email)) {
        await firebaseSignOut(auth);
        throw new Error('Unauthorized admin account.');
      }
      setAdminUser(cred.user);
      return cred.user;
    } catch (err) {
      let message = 'Invalid email or password.';
      if (err.code === 'auth/user-not-found') message = 'No admin account found with this email.';
      if (err.code === 'auth/wrong-password') message = 'Incorrect password.';
      if (err.code === 'auth/too-many-requests') message = 'Too many failed attempts. Try again later.';
      if (err.code === 'auth/invalid-credential') message = 'Invalid email or password credentials.';
      if (err.message && err.message.includes('Access Denied')) message = err.message;
      
      setAuthError(message);
      throw new Error(message);
    }
  };

  const logout = async () => {
    if (auth) {
      await firebaseSignOut(auth);
    }
    setAdminUser(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        adminUser,
        loading,
        authError,
        setAuthError,
        login,
        logout,
        allowedAdmins: ALLOWED_ADMIN_EMAILS
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
