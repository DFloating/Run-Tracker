<template>

    <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <li>{{ item.item.name }}</li>
        <p>{{ item.item.details }}</p>
        <p>{{ item.item.start }}</p>
        
      </li>
    </ul>
  </div>
  
</template>

<script>
import { db } from '../Firebase' 
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { onMounted, ref } from 'vue';
import { getAuth } from 'firebase/auth'


export default {
    name: 'Test',
    setup () {
            const list = ref([]);
            //initiliased empty array
            const collectionRef = collection(db, 'calEvent');

            const fetchData = () => {
              const auth = getAuth();
              const user = auth.currentUser;
              console.log(user)
              if (!user) {
                return; // Exit if user is not authenticated
              }

            const query1 = query(collectionRef, where('userId', '==', user.uid));
              
            getDocs(query1).then((res) => {
            const newData = res.docs.map((item) => ({
            id: item.id,
            item: item.data(),
            }));
        list.value = newData;
        console.log(newData);
        });
        };
    onMounted(
      fetchData
    ); 
    return {
        list,
         fetchData 
        }
    }, 
};

</script>