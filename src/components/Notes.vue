<template>
  <div class="noteWrapper">
    <div class="noteContainer">
      <note-item v-for="(data, index) in this.$store.state.notes" :key="index" :data="data"/>
      <div class="staticItem"><img src="../assets/add.png" alt="Add note" @click="handleAdd"></div>
    </div>
  </div>
</template>

<style>
.noteWrapper {
  min-height: 90vh;
  width: 100%;
}
.noteContainer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.staticItem {
  flex: none;
  margin: 10px 20px;
}
.staticItem img {
  width: 50px;
  height: 50px;
}
</style>

<script>
import NoteItem from "./NoteItem";
import { MUT_ADD_NOTE } from "../store/index";

export default {
  name: 'Notes',
  components: {
    NoteItem
  },
  methods: {
    handleAdd () {
      this.$store.commit(MUT_ADD_NOTE)
    }
  }
}
</script>

