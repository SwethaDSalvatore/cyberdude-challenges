import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByP4_S0zI5NHEswW-oTGdMhIJV2qbV1bE",
  authDomain: "book-app-9817a.firebaseapp.com",
  projectId: "book-app-9817a",
  storageBucket: "book-app-9817a.appspot.com",
  messagingSenderId: "84985551918",
  appId: "1:84985551918:web:43b9a28d1d173067f5d3bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
