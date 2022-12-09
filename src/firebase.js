// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaIE18PKHVOsM_x9ZML7uDLMAfGG7mpDM",
  authDomain: "innovation-a15aa.firebaseapp.com",
  projectId: "innovation-a15aa",
  storageBucket: "innovation-a15aa.appspot.com",
  messagingSenderId: "823131307834",
  appId: "1:823131307834:web:2a2d71076c332fa61b1a03",
  measurementId: "G-22ZPWV8395",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
