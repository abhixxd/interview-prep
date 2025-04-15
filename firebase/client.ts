// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACNc3Lfa3wiAYzzp-yAG0BPMutortBeX4",
  authDomain: "intellicruit-ad2b9.firebaseapp.com",
  projectId: "intellicruit-ad2b9",
  storageBucket: "intellicruit-ad2b9.firebasestorage.app",
  messagingSenderId: "401033520661",
  appId: "1:401033520661:web:01cbe9cf3deeb145b6501c",
  measurementId: "G-1M31Y2HRRG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


