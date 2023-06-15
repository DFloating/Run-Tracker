<script>
import { RouterLink, RouterView } from 'vue-router'
import firebase from "firebase/compat/app";
// import firebase from 'firebase/app';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// import 'firebase/auth'
import { auth } from './Firebase'
import "firebase/compat/auth"
import {db} from './Firebase'
import { collection, addDoc } from 'firebase/firestore'

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/signin');
        } else if (route.path == "/signin" || route.path == "/register") {
          router.replace('/')
        }
      })
    })
  }, 
  methods: {
    async createUser() {
      // 'users' collection ref
      const colRef = collection(db, 'test')
      // data to send
      const dataObj = {
        firstName: 'John',
        lastName: 'Doe', 
        dob: '1990'
      }
      //create doc and return ref to it
      const docRef = await addDoc(colRef, dataObj)

      console.log('Document was created with ID:', docRef.id)
    }
  }, 
  mounted() {
    this.createUser()
  }
}

</script>

<template>
  <header class="navbar">

    <div class="wrapper">
      <nav class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signin">SignIn</RouterLink>
        <RouterLink to="/feed">Feed</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>

  </header>
<main>
  <RouterView />
</main>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  background-color: white;
}
.navigation {
  text-align: center;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 999; /* Ensure the navbar appears above other elements */
}

nav {
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;

}

main {
  padding-top: 2rem; /* Adjust as needed for spacing below the fixed navbar */
}
</style>