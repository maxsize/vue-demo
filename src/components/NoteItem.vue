<template>
  <div class="note">
    <div class="noteHead" :style="theme"></div>
    <div class="noteBody">
      <div class="noteContent">
        <textarea v-if="isEdit" ref="ta" v-model="content" @blur="handleBlur" autofocus></textarea>
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
    },
    theme: function () {
      return { backgroundColor: this.data.theme }
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
  updated: function () {
    if (this.$refs.ta) this.$refs.ta.focus()
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
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
