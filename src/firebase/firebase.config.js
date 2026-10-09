// firebase.config.js — ঐচ্ছিক। এই টিউটোরিয়াল সাইট Firebase ছাড়াই চলে।
// ব্যবহার করতে চাইলে: npm i firebase, তারপর .env.local এ VITE_ ভ্যারিয়েবল দাও।
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
};
