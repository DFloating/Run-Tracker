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
    <h1>Welcome {{ name }}</h1>
        <div class="logo-container">
            <img class="logo pulsate" src="../assets/images/pngwing.com.png" alt="logo" />
        </div>

        <div class="feed">
          <p>Welcome to Run Tracker! An application for avid runners to keep track of workouts that need to be completed for their training block</p>
            <router-link to="/feed">Visit the feed</router-link>
        </div>
    <br>
    <button class="logout-btn" @click="Logout">Logout</button>
</div>
</template>

<style scoped>
.home{
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
.logo-container {
  max-width: 100%;
  padding: 20px;
  
}

p{
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
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