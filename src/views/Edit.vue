<template>
  <div
      class="container edit-page"
  >
    <AddRec
        placeholder="Добавить todo"
        @addValue="addValue"
    />
    <p v-if="loading">Загрузка...</p>
    <div
        v-else-if="category">
      <div class="h4 edit-page__title">
        {{ category.name }}
      </div>
      <ul class="list-group">
        <TodoPreviewItem
            v-for="item in todoList"
            :todoList="item"
            :key="item.id"
            @input="checkedTodo(item.id)"
        />
      </ul>
    </div>
    <p v-else>Запись с id={{ $route.params.id }} не найдена</p>
  </div>
</template>

<script>
import AddRec from '@/components/AddRec';
import TodoPreviewItem from '@/components/todo/TodoPreviewItem';
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Edit',
  components: {
    AddRec,
    TodoPreviewItem,
  },
  data() {
    return {
      loading: true,
      category: null,
      todoList: null,
      idCategory: null
    }
  },
  async created () {
    this.idCategory = +this.$route.params.id
    this.category = await this.getCategories().find(item => item.id === this.idCategory)
    this.todoList = await this.$store.getters.fetchAllById1(this.idCategory)
    this.loading = false
  },
  methods: {
    ...mapGetters([
        'getCategories',
        'fetchAllById',
        'fetchAll',
    ]),
    ...mapMutations([
        'addNewTotoItem',
        'seTodoList',
        'setCheckedDone',
    ]),
    async addValue (val) {
      const newTodoItem = {
        id: Date.now(),
        name: val,
        done: false,
        categoriesId: this.idCategory
      }
      this.addNewTotoItem(newTodoItem)
      console.log(this.idCategory);
      this.todoList = await this.$store.getters.fetchAllById1(this.idCategory)
    },
    checkedTodo (id) {
      this.setCheckedDone(id)
    }
  },
};
</script>

<style lang="stylus">
  .edit-page__title:first-letter {
    text-transform uppercase
  }
</style>