// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "v3-fyp.firebaseapp.com",
  projectId: "v3-fyp",
  storageBucket: "v3-fyp.appspot.com",
  messagingSenderId: "617176161381",
  appId: "1:617176161381:web:10cad4aa79b2a4097c7a8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
