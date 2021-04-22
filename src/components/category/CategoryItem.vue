<template>
  <li class="list-group-item category-item">
    <div class="font-weight-bold text-info h3 d-flex justify-content-between">
      <span
          class="pointer category-item__title"
          @click="editToto(categories.id)"
      >{{ categories.name }}</span>
      <span
          class="category-item__remove pointer"
          @click="$emit('click')"
      >
        &times;
      </span>
    </div>
    <TodoPreview :categoriesId="categories.id" />
  </li>
</template>

<script>
import TodoPreview from '@/components/todo/TodoPreview';

export default {
  name: 'CategoryItem',
  props: {
    categories: {
      type: Object,
      default: null,
    }
  },
  components: {
    TodoPreview,
  },
  methods: {
    editToto (id) {
      this.$router.push('/edit/' + id)
      console.log(id);
    },
  }
};
</script>

<style lang="stylus">
  .pointer {
    cursor pointer
  }
  .category-item__title:first-letter {
    text-transform uppercase
  }
</style>