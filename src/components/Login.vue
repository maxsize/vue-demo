<template>
  <div class="loginContainer">
    <div v-if="!this.$store.state.user.authorized">
      <div class="loginTab">
        <div class="tab" :style="getStyle(0)" @click="selectTab(0)">Login</div>
        <div class="tab" :style="getStyle(1)" @click="selectTab(1)">Vision</div>
        <div class="tab" :style="getStyle(2)" @click="selectTab(2)">Note</div>
      </div>
      <div class="loginPanel" v-if="showLogin">
        <form>
          <p>{{error}}</p>
          <input required type="text" id="username" placeholder="Input your name here" v-model="username">
          <p><button @click="login" type="button">Login</button></p>
        </form>
      </div>
      <div class="loginPanel" v-if="showRegister">
        <h2>Vision api demo</h2>
        <router-link to="/vision" tag="button">Take me there</router-link>
      </div>
      <div class="loginPanel" v-if="showNote">
        <p>Awesome note</p>
        <button @click="gotoNote">Take me there</button>
      </div>
    </div>
    <div v-else>
      <p>Welcome back {{this.$store.state.user.username}}</p>
      <router-link to="/body" tag="button">Take me in</router-link>
    </div>
  </div>
</template>

<script>
import { MUT_LOGIN } from "../store/index";
export default {
  name: 'Login',
  data: function () {
    return {
      activeIndex: 0,
      username: '',
      error: ''
    }
  },
  computed: {
    showLogin () {
      return this.activeIndex === 0
    },
    showRegister () {
      return this.activeIndex === 1
    },
    showNote () {
      return this.activeIndex === 2
    }
  },
  methods: {
    getStyle(index) {
      return index === this.activeIndex ? {backgroundColor:'white', color:'#0080ff'} : {}
    },
    selectTab(index) {
      if (this.activeIndex === index) return;
      this.activeIndex = index;
    },
    login () {
      if (this.username)
      {
        this.$store.commit(MUT_LOGIN, {username:this.username, router:this.$router})
        return true;
      }
      this.error = '* Name is required.'
    },
    gotoNote () {
      this.$router.push({name: 'notes'});
    }
  }
}
</script>

<style>
@import url('../css/login.css');
</style>

