// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQXoWkvk8-lsGw0Dt7ESEDksFxOQRMMPk",
  authDomain: "todo-e64e2.firebaseapp.com",
  projectId: "todo-e64e2",
  storageBucket: "todo-e64e2.appspot.com",
  messagingSenderId: "15028031313",
  appId: "1:15028031313:web:8e80ca7d07692715bb4d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth=getAuth();

// Import the functions you need from the SDKs you need
