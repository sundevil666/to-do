<template>
  <div class="home">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList';

export default {
  name: 'Home',
  components: {
    ToDoList
  }
}
</script>
