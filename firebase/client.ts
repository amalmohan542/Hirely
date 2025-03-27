// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9l3s57gk3Pi8aDc_V_Gmn8-mm5_SV18",
  authDomain: "hirely-48dc3.firebaseapp.com",
  projectId: "hirely-48dc3",
  storageBucket: "hirely-48dc3.firebasestorage.app",
  messagingSenderId: "652778313834",
  appId: "1:652778313834:web:c7c2ca7a59bdc9db629213",
  measurementId: "G-6ZHN30C5FJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);