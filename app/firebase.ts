// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMv-NBDpMj1K8Cm-INGFYUqQpYqpmuuxg",
  authDomain: "go-basket-fd6d1.firebaseapp.com",
  projectId: "go-basket-fd6d1",
  storageBucket: "go-basket-fd6d1.firebasestorage.app",
  messagingSenderId: "1075862611332",
  appId: "1:1075862611332:web:121c65017e2908c615e9d1",
  measurementId: "G-GQPWNJ8LZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);