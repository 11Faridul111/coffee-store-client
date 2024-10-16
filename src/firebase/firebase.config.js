// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq9T3-CKmd7rZ2cEvv-6hnm18opxo_qGg",
  authDomain: "my-coffee-client.firebaseapp.com",
  projectId: "my-coffee-client",
  storageBucket: "my-coffee-client.appspot.com",
  messagingSenderId: "392871513946",
  appId: "1:392871513946:web:aad3a1e1bf3fad4e1b2d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;