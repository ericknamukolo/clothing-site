import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHsuCrgGGjpixr7SLZhoZTjZ0_ouOk9-Y',
  authDomain: 'clothing-site-d58d7.firebaseapp.com',
  projectId: 'clothing-site-d58d7',
  storageBucket: 'clothing-site-d58d7.appspot.com',
  messagingSenderId: '571119862039',
  appId: '1:571119862039:web:d08a06f6c3562b32d1f752',
  measurementId: 'G-EXBQ2S1ZHF',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const document = doc;
export const setDocument = setDoc;
export const getDocument = getDoc;
export const signInWithGooglePopup = () =>
  signInWithPopup(
    auth,
    new GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' })
  );
export const signInwithGoogle = () =>
  signInWithRedirect(
    auth,
    new GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' })
  );

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
