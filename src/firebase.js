// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbambxBBtb9N8o2QrTPyea5AURBM6Nzx4",
  authDomain: "smg-marketing.firebaseapp.com",
  projectId: "smg-marketing",
  storageBucket: "smg-marketing.appspot.com",
  messagingSenderId: "596097291701",
  appId: "1:596097291701:web:6a0579774974cfaa9cf5fc",
  measurementId: "G-Z9K722YQGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);