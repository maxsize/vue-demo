<template>
  <div>
    <div class="main-header">
      <span class="golden">个人简介</span>
      <div class="header-right">
        <div v-if="this.$store.state.user.authorized">
          <span>欢迎你{{this.$store.state.user.username}}</span>
          <a href="" @click="handleLogout">登出</a>
        </div>
        <div v-else><a href="#">登陆</a></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { MUT_LOGOUT, MUT_LOAD_CACHE } from './store/index'

export default {
  name: 'App',
  beforeMount: function () {
    this.$store.commit(MUT_LOAD_CACHE)
  },
  methods: {
    handleLogout (e) {
      this.$store.commit(MUT_LOGOUT, this.$router)
      e.preventDefault()
    }
  }
}
</script>

<style>
@import url('./App.css');
</style>
