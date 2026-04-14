// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcqBnNcZ29W1OF0uEQABzibEZYeq3Sc5M",
  authDomain: "medassist-fd155.firebaseapp.com",
  projectId: "medassist-fd155",
  storageBucket: "medassist-fd155.firebasestorage.app",
  messagingSenderId: "385109263502",
  appId: "1:385109263502:web:e2e8209b21973b62c375df",
  measurementId: "G-LT1G4PRE0D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
