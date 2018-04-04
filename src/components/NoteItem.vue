<template>
  <div class="note">
    <!-- <div class="noteHead"></div> -->
    <theme-selector class="noteHead" @delNote="handleDel" @changeTheme="handleChangeTheme"/>
    <div class="noteBody" :style="theme">
      <div class="noteContent">
        <textarea v-if="isEdit" v-model="content" @blur="handleBlur" v-focus></textarea>
        <pre v-else @click="handleEdit">{{this.item.content}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { MUT_CHANGE_NOTE, MUT_CHANGE_THEME, MUT_DEL_NOTE } from "../store/index";
import ThemeSelector from "./ThemeSelector";

export default {
  name: 'NoteItem',
  components: {
    ThemeSelector
  },
  props: ['item'],
  data: function () {
    return {
      isEdit: false
    }
  },
  computed: {
    content: {
      get: function () {
        return this.item.content
      },
      set: function (value) {
      }
    },
    theme: function () {
      return { backgroundColor: this.item.theme }
    }
  },
  methods: {
    handleEdit () {
      this.isEdit = true
    },
    handleBlur (e) {
      this.$store.commit(MUT_CHANGE_NOTE, {data: this.item, value: e.target.value})
      this.isEdit = false
    },
    handleChangeTheme (color) {
      this.$store.commit(MUT_CHANGE_THEME, {item: this.item, theme: color})
    },
    handleDel () {
      this.$store.commit(MUT_DEL_NOTE, this.item)
    }
  },
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
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
