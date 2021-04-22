<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

const categoriesDemo = [
  {id: 1, name: 'купить'},
  {id: 2, name: 'продать'},
  {id: 3, name: 'увидеть'},
]
const todoListDemo = [
  {id: 1, name: 'помидоры', done: true, categoriesId: 1},
  {id: 2, name: 'кабачки', done: true, categoriesId: 1},
  {id: 3, name: 'морковь', done: false, categoriesId: 1},
  {id: 4, name: 'соль', done: false, categoriesId: 1},
  {id: 5, name: 'сахар', done: false, categoriesId: 1},
  {id: 6, name: 'дом', done: false, categoriesId: 2},
  {id: 7, name: 'дачу', done: false, categoriesId: 2},
  {id: 8, name: 'море', done: false, categoriesId: 3},
  {id: 9, name: 'небо', done: false, categoriesId: 3},
]
import { mapMutations } from 'vuex'

export default {
  created () {
    this.setCategories(categoriesDemo)
    this.seTodoList(todoListDemo)
  },
  methods: {
    ...mapMutations([
      'setCategories',
      'seTodoList',
    ]),
  }
}
</script>
<style lang="stylus">
</style>
