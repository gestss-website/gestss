// Whitelist of authorized admin emails allowed to access the admin dashboard
export const ALLOWED_ADMIN_EMAILS = [
  'abhikumar3584@gmail.com',
  // Aap yahan future me 1 ya 2 aur admin emails add kar sakte hain
];

export const isEmailAuthorizedAdmin = (email) => {
  if (!email) return false;
  return ALLOWED_ADMIN_EMAILS.some(
    (adminEmail) => adminEmail.toLowerCase() === email.trim().toLowerCase()
  );
};
