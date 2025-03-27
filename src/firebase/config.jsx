// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwSNgj-FF3k5bPrgIER9X5ERmvPM74u0",
  authDomain: "note-app-e1c8b.firebaseapp.com",
  projectId: "note-app-e1c8b",
  storageBucket: "note-app-e1c8b.firebasestorage.app",
  messagingSenderId: "72348407069",
  appId: "1:72348407069:web:5853eade2e7bdaf0f67df4",
  measurementId: "G-6K4FCHZYXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);