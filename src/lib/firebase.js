import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const isFirebaseConfigured = () => {
  const key = import.meta.env.VITE_FIREBASE_API_KEY;
  return Boolean(key && key !== 'your_api_key_here' && key.length > 5);
};

// Initialize Firebase safely
let app = null;
let auth = null;
let db = null;

try {
  if (isFirebaseConfigured()) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn('Firebase config keys are not yet set in .env. Please add them to enable live submissions.');
  }
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
}

export { app, auth, db };

// ============================================================================
// Form Submission Helpers (Saves to Firestore)
// ============================================================================

/**
 * 1. Request Talent Now Form Submission
 */
export async function submitTalentRequest(data) {
  if (!isFirebaseConfigured() || !db) {
    console.warn('Firebase not configured. Simulated submission:', data);
    return { success: true, simulated: true };
  }
  
  const docRef = await addDoc(collection(db, 'talent_requests'), {
    ...data,
    status: 'new', // new | contacted | in_review | closed
    source: 'website_modal',
    createdAt: serverTimestamp(),
    createdAtClient: new Date().toISOString()
  });
  return { success: true, id: docRef.id };
}

/**
 * 2. Join Talent Network Form Submission
 */
export async function submitTalentApplication(data) {
  if (!isFirebaseConfigured() || !db) {
    console.warn('Firebase not configured. Simulated submission:', data);
    return { success: true, simulated: true };
  }

  const docRef = await addDoc(collection(db, 'talent_applications'), {
    ...data,
    status: 'new', // new | reviewed | shortlisted | archived
    source: 'talent_network_modal',
    createdAt: serverTimestamp(),
    createdAtClient: new Date().toISOString()
  });
  return { success: true, id: docRef.id };
}

/**
 * 3. Instant Query / Contact Form Submission
 */
export async function submitInquiry(data) {
  if (!isFirebaseConfigured() || !db) {
    console.warn('Firebase not configured. Simulated submission:', data);
    return { success: true, simulated: true };
  }

  const docRef = await addDoc(collection(db, 'inquiries'), {
    ...data,
    status: 'new', // new | contacted | resolved | archived
    source: 'contact_page',
    createdAt: serverTimestamp(),
    createdAtClient: new Date().toISOString()
  });
  return { success: true, id: docRef.id };
}

/**
 * Update Status of any submission
 */
export async function updateSubmissionStatus(collectionName, docId, newStatus, adminNote = '') {
  if (!db) throw new Error('Database not initialized');
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, {
    status: newStatus,
    adminNote: adminNote || '',
    updatedAt: serverTimestamp()
  });
}

/**
 * Delete a submission
 */
export async function deleteSubmission(collectionName, docId) {
  if (!db) throw new Error('Database not initialized');
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
}
