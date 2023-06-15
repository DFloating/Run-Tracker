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
    <img class="logo" src="../assets/images/2-run-tracker-logo.jpeg" />
        <div class="feed">
            <router-link to="/feed">Visit the feed</router-link>
        </div>
    <br>
    <button class="Logout" @click="Logout">Logout</button>
</div>
</template>

<style scoped>
.home{
    text-align: center;
}

</style>