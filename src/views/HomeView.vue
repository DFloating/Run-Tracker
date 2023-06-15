<script>
import { ref, onBeforeMount } from 'vue'
// import firebase from 'firebase/app';
import firebase from "firebase/compat/app";
export default {
    setup() {
        const name = ref("");

        onBeforeMount(() => {
            const user = firebase.auth().currentUser;
            if (user) {
                name.value = user.email.split('@')[0];
            }
        });

        const Logout = () => {
            firebase
                .auth()
                .signOut()
                .then(() => console.log("Signed out"))
                .catch(err => alert(err.message));
        }
        return {
            name,
            Logout    
        }
    }
}


</script>

<template>
<div class="home">
    <h1>Welcome,{{ name }}</h1>
        <div class="logo-container">
            <img class="logo pulsate" src="../assets/images/2-run-tracker-logo.jpeg" alt="logo" />
        </div>

        <div class="feed">
            <router-link to="/feed">Visit the feed</router-link>
        </div>
    <br>
    <button class="logout-btn" @click="Logout">Logout</button>
</div>
</template>

<style scoped>
.home{
    text-align: center;
}
.logo-container {
  max-width: 100%;
  padding: 20px;
}
.logo{
    max-width: 100%;
    border-radius: 50px;
}
@keyframes pulsate {
  0%, 70% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.pulsate {
  animation: pulsate 4s infinite;
}


.logout-btn {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .home {
    font-size: 18px;
  }

  .logout-btn {
    font-size: 16px;
    padding: 8px 16px;
  }
}
</style>