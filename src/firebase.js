// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxVTa-GU4WAkkBwB0_mQY9RWT4w1BZ6G4",
    authDomain: "netflix-clone-21b90.firebaseapp.com",
    projectId: "netflix-clone-21b90",
    storageBucket: "netflix-clone-21b90.appspot.com",
    messagingSenderId: "378285060841",
    appId: "1:378285060841:web:7931f5fbd24b453217f678",
    measurementId: "G-BM98Q8PJCB"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  
  export { app, db, auth };