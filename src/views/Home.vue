<template>
  <div class="container">
    <div class="h1">"Todo" ничего не забыто!!!</div>
    <ul class="list-group">
      <CategoryItem
          v-for="cat in categories"
          :categories="cat"
          :key="cat.id"
          @click="removeItemCategories(cat.id)"
      />
    </ul>
  </div>
</template>

<script>
import CategoryItem from '@/components/category/CategoryItem';
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [],
    }
  },
  async created () {
    this.categories = await this.getCategories()
  },
  methods: {
    ...mapGetters([
        'getCategories',
    ]),
    removeItemCategories (id) {
      // const
      console.log(id);
    }
  }
}
</script>
