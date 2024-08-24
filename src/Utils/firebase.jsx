// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfWIcVdFt11gI-HIQoshw5OtSX90ecJek",
  authDomain: "netflix-gpt-e34c0.firebaseapp.com",
  projectId: "netflix-gpt-e34c0",
  storageBucket: "netflix-gpt-e34c0.appspot.com",
  messagingSenderId: "992572719596",
  appId: "1:992572719596:web:ca8824bad20d9b2af3c0c9",
  measurementId: "G-ESE69WJR2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();