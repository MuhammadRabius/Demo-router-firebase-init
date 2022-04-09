// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYGayGIsIlH2aoFbfenG8IuWcR2q3WL2A",
  authDomain: "router-firebase-init.firebaseapp.com",
  projectId: "router-firebase-init",
  storageBucket: "router-firebase-init.appspot.com",
  messagingSenderId: "18714685591",
  appId: "1:18714685591:web:c551bf6156e5112d5eb9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;