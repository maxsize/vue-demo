<template>
  <div :style="{display:'inline-block'}">
    <input type='text' :value="getValue" :name="name" @change="handleChange"/>
    <span v-if="isArray" @click="handleAdd">+</span>
  </div>
</template>

<script>
import { MUT_CHANGE_VALUE, MUT_ADD_VALUE } from '../store/index'

export default {
  name: 'FieldInput',
  props: ['name', 'info'],
  methods: {
    handleChange: function (e) {
      // this.$set(this.info, this.name, e.target.value)
      this.$store.commit(
        MUT_CHANGE_VALUE,
        {
          data: this.info,
          key: this.name,
          newValue: e.target.value
        }
      )
    },
    handleAdd: function (e) {
      this.$store.commit(
        MUT_ADD_VALUE,
        {
          data: this.info,
          index: this.name
        }
      )
    }
  },
  computed: {
    getValue: function () {
      return this.info ? this.info[this.name] : ''
    },
    isArray: function () {
      return !isNaN(this.name)
    }
  }
}
</script>
