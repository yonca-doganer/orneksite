import { auth } from './firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';

/**
 * AuthService handles all Firebase Authentication logic.
 * Follows Single Responsibility Principle (SRP).
 */
export const AuthService = {
  /**
   * Listen for auth state changes.
   */
  subscribeToAuthChanges: (callback: (user: FirebaseUser | null) => void) => {
    return onAuthStateChanged(auth, callback);
  },

  /**
   * Sign in with email and password.
   */
  login: async (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  },

  /**
   * Register a new user.
   */
  register: async (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  },

  /**
   * Sign out the current user.
   */
  logout: async () => {
    return signOut(auth);
  }
};
