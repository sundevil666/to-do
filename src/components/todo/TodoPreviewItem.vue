<template>
  <li
      class="list-group-item d-flex justify-content-between"
      :class="todoList.done ? 'text-decoration-line-through text-danger' : 'text-success'"
  >
    <div>{{ todoList.name }}</div>
    <div class="form-check">
      <input
          class="form-check-input"
          type="checkbox"
          :disabled="disabled"
          v-model="todoList.done"
          @input="$emit('input', $event)"
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoPreviewItem',
  props: {
    todoList: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style lang="stylus">
  .text-decoration-line-through {
    text-decoration line-through
  }

  .form-check-input {
    cursor pointer
  }
</style>