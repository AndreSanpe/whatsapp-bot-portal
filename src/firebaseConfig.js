// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6bgCSa6de7W0fXX3BJ47w7FpqzDKiWZ4",
    authDomain: "whatsapp-bot-portal.firebaseapp.com",
    projectId: "whatsapp-bot-portal",
    storageBucket: "whatsapp-bot-portal.appspot.com",
    messagingSenderId: "1012248387731",
    appId: "1:1012248387731:web:ddf0d51168cb69c3c42d66",
    measurementId: "G-836KK519BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
