<script>
// import { run } from 'node:test';
import Header from '../components/Header.vue'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
import Test from '../components/Test.vue'


export default {
    name: 'App',
    components: {
        Header,
        Tasks,
        AddTask,
        Test,
    },
    data() {
        return {
            tasks: [],           //lifecycle method
            showAddTask: false
        }
    },
    methods: {
      
        toggleAddTask() {                           //hides the add task 
          this.showAddTask = !this.showAddTask
        },
        addTask(task) {
            this.tasks = [...this.tasks, task]
        },
        deleteTask(id) {
            if(confirm('Are you sure?')) {
            this.tasks = this.tasks.filter((task) => task.id !== id)
            }
        }, 
        toggleReminder(id) {
            this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task )
        },
    },
    created() {
        this.tasks = [
            {    
                id: 1,
                details: '2km warmup 7km tempo run 2km cool down',
                type: 'Tempo Run',
                day: 'Wednesday 19:00',
                reminder: true, 
            },
            {
                id: 2,
                details: '3 x 500 m sprints (@5K pace)',
                type: 'Speed Run',
                day: 'Thursday 16:00',
                reminder: false, 
            },
            {
                id: 3,
                details: '15km',
                type: 'Long Run',
                day: 'Sunday 9:00',
                reminder: true, 
            }
        ]
    }, 
     
}
</script>

<!-- <template>
   <div class="container"> 
        <Header @toggle-add-task="toggleAddTask" title="Run Tracker" :showAddTask="showAddTask" />
        <div v-if="showAddTask">
        <AddTask @add-Task="addTask"/>
        </div>
        <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
        <Test @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  overflow: auto;
  min-height: 300px;
  border: 5px solid white;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style> -->

<template>
  <div class="container"> 
    <Header @toggle-add-task="toggleAddTask" title="Run Tracker" :showAddTask="showAddTask" />
    <div v-if="showAddTask">
      <AddTask @add-Task="addTask"/>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
    <Test @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: orange;
}

.container {
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

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
