// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-3204b.firebaseapp.com",
  projectId: "taskmanager-3204b",
  storageBucket: "taskmanager-3204b.appspot.com",
  messagingSenderId: "888774339006",
  appId: "1:888774339006:web:48045eab590f2a4f46b1ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);