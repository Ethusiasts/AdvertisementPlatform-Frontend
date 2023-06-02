// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCznzkhDjgGYMq4es_8D1Xrpq5UQ5kpu5M",
  authDomain: "billboard-images.firebaseapp.com",
  projectId: "billboard-images",
  storageBucket: "billboard-images.appspot.com",
  messagingSenderId: "808245516969",
  appId: "1:808245516969:web:a9ee4cd4baa4c7390fa7b8",
  measurementId: "G-J1N19ZQCPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);