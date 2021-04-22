<template>
  <div class="mb-3 row add-rec">
    <div class="col-9">
      <input
        v-model="value"
        class="form-control"
        :class="error ? 'error-input' : ''"
        :placeholder="placeholder"
    />
    </div>
    <div class="col-3">
      <button
          class="btn btn-info w-100"
          @click="addValue"
      >
        Добавить
      </button>
    </div>
    <div
        v-if="error"
        class="error"
    >
      Поле не должно быть пустым
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRec",
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
  },
  data() {
    return {
      value: '',
      error: false,
    }
  },
  methods: {
    addValue () {
      if(!this.value) {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 1500)
        return
      }
      this.$emit('addValue', this.value.trim())
      this.value = ''
    }
  }
}
</script>

<style lang="stylus">
  .add-rec {
    position relative
    padding-bottom 16px

    .error-input {
      border-color red
    }
    .error {
      position absolute
      bottom 0
      left 15px
      font-size 12px
      color red
    }
  }

</style>