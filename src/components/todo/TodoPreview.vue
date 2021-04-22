<template>
  <ol class="list-group list-group-numbered">
    <TodoPreviewItem
      v-for="item in todoList"
      :todoList="item"
      :key="item.id"
      disabled
    />
  </ol>
</template>

<script>
import TodoPreviewItem from '@/components/todo/TodoPreviewItem';
import {mapGetters} from 'vuex'

export default {
  name: 'TodoPreview',
  props: {
    categoriesId: {
      type: Number,
      default: null,
    }
  },
  components: {
    TodoPreviewItem,
  },
  data() {
    return {
      countPreview: 3,
      todoList: null,
    }
  },
  async created () {
    this.todoList = await this.fetchPreviewById(this.categoriesId, this.countPreview)
  },
  methods: {
    ...mapGetters([
        'getTodoList',
    ]),
    fetchPreviewById(categoriesId, count) {
      const todoLists = []
      this.getTodoList().forEach(item => {
        if(todoLists.length > count) {
          return false
        }
        if(item.categoriesId === categoriesId) {
          todoLists.push(item)
        }
      })
      return todoLists
    },
  },
};
</script>

<style scoped>

</style>