// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgiXeuX5v-oLozZxSyhlabbvYnx5I5IzI",
  authDomain: "eco-track-98b39.firebaseapp.com",
  projectId: "eco-track-98b39",
  storageBucket: "eco-track-98b39.firebasestorage.app",
  messagingSenderId: "864925746886",
  appId: "1:864925746886:web:cedfc50d5c9a20ea31b9c7"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)