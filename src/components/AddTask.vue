<script>
import {db} from '../Firebase';
import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

export default {
  
    name: 'AddTask',
    data() {
        return {
            text: '',
            details: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text) {
                alert('Please add a task')
                return
            }
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
            console.log("no current user")
            return
            }

            const newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.text,
                details: this.details,
                day: this.day,
                reminder: this.reminder,
                userId: user.uid
            }
            const collectionRef = collection(db, 'calEvent');
         addDoc(collectionRef, newTask)
            .then(() => {
            console.log('Task added to Firestore')
            })
            .catch((error) => {
            console.error('Error adding task to Firestore:', error)
            })

        this.text = ''
        this.details = ''
        this.day = ''
        this.reminder = false
        }
    }
}

</script>


<template>
  <div class="form-container">
      <form @submit="onSubmit" class="add-form">
        <div class="form-control">
          <label>Type</label>
          <input type="text" v-model="text" name="text" placeholder="Long, Tempo, Speed or Recovery" />
        </div>
        <div class="form-control">
          <label>Details</label>
          <input
            type="text"
            v-model="details"
            name="details"
            placeholder="Add Details of Run"
          />
        </div>
        <div class="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
          />
        </div>
        <div class="form-control form-control-check">
          <label>Set Reminder</label>
          <input type="checkbox" v-model="reminder" name="reminder" />
        </div>
    
        <input type="submit" value="Add Run" class="btn btn-block" />
      </form>
    </div>
  </template>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}


.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>