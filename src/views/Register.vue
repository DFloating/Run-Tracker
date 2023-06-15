<script>
// import firebase from 'firebase/app';
import{ ref } from 'vue';
import 'firebase/auth'
import firebase from "firebase/compat/app";

export default {
  setup() {
    const email = ref("")
    const password = ref("")

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
          alert('user signed in');
        })
        .catch(err =>alert(err.message));
    }

    return {
      Register, 
      email, 
      password
    }
  }
}


</script>

<template>
    <div class="Register">
      <h1>Create new account</h1>
      <form @submit.prevent="Register">
          <input type="text" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <input type="submit" value="Create new account" class="register-btn" />
          <p>Have an account? <router-link to="/signin">SignIn here</router-link></p>
      </form>
    </div>
</template> 

<style>

.Register {
  text-align: center;
}

.register-btn {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>