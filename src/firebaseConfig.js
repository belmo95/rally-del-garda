// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // se ti serve
// import { getStorage } from "firebase/storage";   // se ti serve per PDF

const firebaseConfig = {
  apiKey: "....",
  authDomain: "....",
  projectId: "....",
  storageBucket: "....",
  messagingSenderId: "....",
  appId: "...."
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const storage = getStorage(app);
