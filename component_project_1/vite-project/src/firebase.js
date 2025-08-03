// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvaPTxKDt6onTzgWbACeHsdK120uZtGq8",
  authDomain: "shifaaloginpage.firebaseapp.com",
  projectId: "shifaaloginpage",
  storageBucket: "shifaaloginpage.firebasestorage.app",
  messagingSenderId: "160451147296",
  appId: "1:160451147296:web:d633ce413fec564e0dee45",
  measurementId: "G-8VLK8QTB4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
