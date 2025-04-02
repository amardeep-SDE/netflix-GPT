// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhXxng4TjZRwrdRHjYIRG3taLjpNduqw0",
  authDomain: "netflixgpt-a0945.firebaseapp.com",
  projectId: "netflixgpt-a0945",
  storageBucket: "netflixgpt-a0945.firebasestorage.app",
  messagingSenderId: "156617739977",
  appId: "1:156617739977:web:58d46d2994458bcc6d0718",
  measurementId: "G-2E4SM90CTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();