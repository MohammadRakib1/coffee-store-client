// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4YWrIzR3FMDIDdb7QZ1FWZCykoCpDr7g",
    authDomain: "coffee-store-7128b.firebaseapp.com",
    projectId: "coffee-store-7128b",
    storageBucket: "coffee-store-7128b.firebasestorage.app",
    messagingSenderId: "241206248029",
    appId: "1:241206248029:web:5ac4a57b2570611fb203b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;