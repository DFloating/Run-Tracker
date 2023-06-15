import './assets/main.css'
import { db, app1 } from './Firebase' 
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// import firebase from 'firebase/app'
import firebase from "firebase/compat/app";
// Required for side-effects
import { doc, addDoc, collection } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkoNH60PQyVXM1Cvlsp6ATZ8UZ1sK3IuM",
    authDomain: "run-calender.firebaseapp.com",
    projectId: "run-calender",
    storageBucket: "run-calender.appspot.com",
    messagingSenderId: "1000355084547",
    appId: "1:1000355084547:web:8a6407f4dd4959d8435136",
    measurementId: "G-P6GJYLFNGB"
  };

firebase.initializeApp(firebaseConfig);

// const app1 = initializeApp(firebaseConfig);
// const firestore = getFirestore();
// // const db = getFirestore(app);
const collectionRef = collection(db, 'calEvent');

function postFirebase() {
  addDoc(collectionRef, { 
    details: details, 
    type: type, 
    day: day,
    reminder: false
  })
  .then(() => {
    alert('Data added')
  }) 
  .catch((error) => {
    alert(error.message)
  })
};



const app = createApp(App)
console.log('Hello there, Firestore!');

app.use(router)
// app.use(db)
app.mount('#app')

 