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
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Password" v-model="password" />
      </div>
      <div class="form-group">
        <input type="submit" value="Sign In" class="signin-btn" />
      </div>
      <p>Need an account? <router-link to="/register">Register here</router-link></p>
    </form>
  </div>
</template>

<style>
.signin {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    overflow: auto;
    min-height: 300px;
    border: 2px solid #fff;
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0,);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.signin-btn {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
