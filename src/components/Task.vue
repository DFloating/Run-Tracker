<script>

export default {
    name: 'Task',
    props: {
        task: Object
    },
    
}

</script>

<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">  
        <h3>{{ task.type }}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
        <p>{{ task.details }}</p>
    </div>
</template>

<style>
.fas {
  color: red;
}

.task {
  background-color: rgba(0, 0, 0, 2);
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>