// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKOuTD09XPkP2i7-Q2qXwmzbkCFq9s4fk",
  authDomain: "netflixgpt-fbc73.firebaseapp.com",
  projectId: "netflixgpt-fbc73",
  storageBucket: "netflixgpt-fbc73.appspot.com",
  messagingSenderId: "164915163100",
  appId: "1:164915163100:web:6b662ea45c18505c156919",
  measurementId: "G-FWGY95XXF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
