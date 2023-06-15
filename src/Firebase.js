import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDkoNH60PQyVXM1Cvlsp6ATZ8UZ1sK3IuM",
    authDomain: "run-calender.firebaseapp.com",
    projectId: "run-calender",
    storageBucket: "run-calender.appspot.com",
    messagingSenderId: "1000355084547",
    appId: "1:1000355084547:web:8a6407f4dd4959d8435136",
    measurementId: "G-P6GJYLFNGB"
  };



export const app1 = initializeApp(firebaseConfig); //initializing the app
export const db = getFirestore(app1);
export const auth = getAuth()