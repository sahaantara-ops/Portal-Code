// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqe1n-69-6sY3w8UckK_tGMw5jA6FGumA",
  authDomain: "portal-code.firebaseapp.com",
  projectId: "portal-code",
  storageBucket: "portal-code.firebasestorage.app",
  messagingSenderId: "276236869340",
  appId: "1:276236869340:web:b6c9e577938adaebd81e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;