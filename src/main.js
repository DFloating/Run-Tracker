import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

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
const app = createApp(App)

app.use(router)

app.mount('#app')

 