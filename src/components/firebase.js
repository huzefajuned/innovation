import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHPMhBklpL-4L6XVGOfVSOEGEN6t2Q4FA",
  authDomain: "innov-f4bf0.firebaseapp.com",
  projectId: "innov-f4bf0",
  storageBucket: "innov-f4bf0.appspot.com",
  messagingSenderId: "130172457943",
  appId: "1:130172457943:web:9b5d1cbb2286ff6b30b192",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
