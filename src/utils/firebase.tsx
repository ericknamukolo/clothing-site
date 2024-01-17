import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
