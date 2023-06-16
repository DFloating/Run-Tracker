
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


<template>
    
      <div v-for="item in list" :key="item.id" :class="[item.item.reminder ? 'reminder' : '', 'item']">
        <h3>{{ item.item.text }}
          <i class="fas fa-times"></i>
        </h3>
          <p>{{ item.item.day }}</p>
        <p>{{ item.item.details }}</p>

      </div>

</template>

<style scoped>

.fas {
  color: red;
}

.item {
  background-color: rgba(0, 0, 0, 3);
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
}

.item.reminder {
  border-left: 5px solid green;
}

.item h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
