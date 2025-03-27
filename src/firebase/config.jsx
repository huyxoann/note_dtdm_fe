// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25e8MSjH4tGRou_yfIHs8AuBkz15lymI",
  authDomain: "thread-detection-70a74.firebaseapp.com",
  projectId: "thread-detection-70a74",
  storageBucket: "thread-detection-70a74.firebasestorage.app",
  messagingSenderId: "151389378292",
  appId: "1:151389378292:web:8bee727e7274b3af1270a1",
  measurementId: "G-VCSNVQFQX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);