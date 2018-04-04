<template>
  <div class="note">
    <div class="noteHead"></div>
    <div class="noteBody">
      <div class="noteContent">
        <textarea v-if="isEdit" v-model="content" @blur="handleBlur" v-focus></textarea>
        <pre v-else @click="handleEdit">{{this.data.content}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { MUT_CHANGE_NOTE } from "../store/index";
export default {
  name: 'NoteItem',
  props: ['data'],
  data: function () {
    return {
      isEdit: false
    }
  },
  computed: {
    content: {
      get: function () {
        return this.data.content
      },
      set: function (value) {
        this.$store.commit(MUT_CHANGE_NOTE, {data: this.data, value: value})
      }
    }
  },
  methods: {
    handleEdit () {
      this.isEdit = true
    },
    handleBlur () {
      this.isEdit = false
    }
  },
  // updated: function () {
  //   if (this.$refs.ta) this.$refs.ta.focus()
  // },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
        // el.select();
      }
    }
  }
}
</script>

<style>
.note {
  width: 230px;
  height: 280px;
  margin: 10px 20px;
  border-style: solid;
  border-width: 1px;
  border-color: bisque;
}
.noteHead {
  width: 100%;
  height: 10%;
  background-color: antiquewhite;
}
.noteBody {
  width: 100%;
  height: 90%;
  background-color: white;
}
.noteContent {
  font-size: 1.2em;
  height: 100%;
}
.noteContent textarea {
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 1.04em;
}
.noteContent span {
  display: inline-block;
}
pre {
  margin: 0;
}
</style>
