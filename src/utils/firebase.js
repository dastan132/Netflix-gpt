// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS7A6ce_uTTtBr3I1gP7MI1eVQhFApVe0",
  authDomain: "netflix-gpt-b9c03.firebaseapp.com",
  projectId: "netflix-gpt-b9c03",
  storageBucket: "netflix-gpt-b9c03.firebasestorage.app",
  messagingSenderId: "460726496534",
  appId: "1:460726496534:web:5b51bbf80f7354f6903437",
  measurementId: "G-JR78FBSZS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();