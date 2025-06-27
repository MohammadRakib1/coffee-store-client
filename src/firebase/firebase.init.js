// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_-fvbG0fxTP3Q5LrDM00e0x0xD5gWIAY",
    authDomain: "coffee-store-570bf.firebaseapp.com",
    projectId: "coffee-store-570bf",
    storageBucket: "coffee-store-570bf.firebasestorage.app",
    messagingSenderId: "491517087228",
    appId: "1:491517087228:web:9555320a6b201de142b679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);