// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsHvw_O8VecPyB95ppxYsZepyhAdRuv90",
  authDomain: "challenge-1ca72.firebaseapp.com",
  projectId: "challenge-1ca72",
  storageBucket: "challenge-1ca72.appspot.com",
  messagingSenderId: "201417998342",
  appId: "1:201417998342:web:37d2f076813b91a1298387",
  measurementId: "G-B8G3SMZ2Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
