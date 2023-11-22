// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-8354c.firebaseapp.com",
  projectId: "mern-auth-8354c",
  storageBucket: "mern-auth-8354c.appspot.com",
  messagingSenderId: "451997316189",
  appId: "1:451997316189:web:dd00616ec01c87027c09b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);