// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSi2KETe2A8QMFSHhJ-9KxTYPc8BG5Agw",
  authDomain: "kaamcrow-f386e.firebaseapp.com",
  projectId: "kaamcrow-f386e",
  storageBucket: "kaamcrow-f386e.appspot.com",
  messagingSenderId: "1073724171984",
  appId: "1:1073724171984:web:e74c0685b2a8c5804ca0d5",
  measurementId: "G-E262WSW2SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getDatabase(app);
export const auth=getAuth();