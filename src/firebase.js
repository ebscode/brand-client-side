// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoAzpRSHLWVRRvMxM2MvpAyKR-02DZNlk",
  authDomain: "technology-electronics-6f0b8.firebaseapp.com",
  projectId: "technology-electronics-6f0b8",
  storageBucket: "technology-electronics-6f0b8.appspot.com",
  messagingSenderId: "139290712169",
  appId: "1:139290712169:web:21d24ec11bec7dfae0eaf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)