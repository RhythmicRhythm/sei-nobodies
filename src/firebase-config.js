// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAazRk1jr08MFMGG9Q3IgWyiGcu9fz4BHM",
  authDomain: "sei-nobodies.firebaseapp.com",
  projectId: "sei-nobodies",
  storageBucket: "sei-nobodies.appspot.com",
  messagingSenderId: "317661408195",
  appId: "1:317661408195:web:0bef917ff0b994ce96eb76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);