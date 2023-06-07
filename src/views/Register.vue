<script>
import firebase from 'firebase/app';
import{ ref } from 'vue';
import 'firebase/auth'

export default {
  setup() {
    const email = ref("")
    const password = ref("")

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
          alert(user);
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
          <input type="submit" value="" />
          <p>Have an account? <router-link to="/signin">SignIn here</router-link></p>
      </form>
    </div>
</template> 

<style>

.Register {
  text-align: center;
}
/* @media (min-width: 1024px) {
  .Register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>