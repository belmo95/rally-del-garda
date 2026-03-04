// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";   // Realtime Database
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAtkhbvsogLd3v83WE37s78f2pWP63YMM",
  authDomain: "rally-del-garda.firebaseapp.com",
  projectId: "rally-del-garda",
  storageBucket: "rally-del-garda.firebasestorage.app",
  messagingSenderId: "372830123480",
  appId: "1:372830123480:web:f2d79d8192e2a7b660eead",
  measurementId: "G-HLV087Z4GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);      // Firestore
export const rtdb = getDatabase(app);     // Realtime Database
export const storage = getStorage(app);   // Storage