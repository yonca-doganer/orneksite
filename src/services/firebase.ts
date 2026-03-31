import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// In a real app, these would be in .env
// For this environment, we'll use placeholders or the provided config if available
const firebaseConfig = {
  apiKey: "AIzaSyDummyKey",
  authDomain: "learnhub-lms.firebaseapp.com",
  projectId: "learnhub-lms",
  storageBucket: "learnhub-lms.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
