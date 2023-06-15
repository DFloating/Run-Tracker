<script>
// import firebase from 'firebase/app';
import {ref} from 'vue';
import 'firebase/auth'
import firebase from "firebase/compat/app";

export default {
  // name: 'Signincomponent',
  setup() {
    const email = ref("");
    const password = ref("");

    const SignIn = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message));
    }

    return {
      SignIn, 
      email, 
      password
    }
  }
}

</script>

<template>
  <div class="signin">
    <h1>Sign In</h1>
      <form @submit.prevent="SignIn">
          <input type="text" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <input type="submit" value="SignIn" />
          <button @click="register">LogIn</button>
          <!-- <button @click="signInWithGoogle">Sign In With Google</button> -->
          <p>Need an account? <router-link to="/register">Register here</router-link></p>
      </form>
  </div>
</template>

<style>
.signin {
  text-align: center;
}

</style>
