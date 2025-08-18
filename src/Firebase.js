


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSp-vn2pE1_4DuPkt_Etqrv7LFyFRTWbk",
  authDomain: "pawfect-paws-9db48.firebaseapp.com",
  projectId: "pawfect-paws-9db48",
  storageBucket: "pawfect-paws-9db48.firebasestorage.app",
  messagingSenderId: "167733293527",
  appId: "1:167733293527:web:3e218012c9d469419e1b92",
  measurementId: "G-598VFTN8ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore()





