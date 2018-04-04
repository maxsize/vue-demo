<template>
  <div class="theme-selector-container">
    <div class="theme-selector-bar"></div>
    <div class="theme-selector-wrapper">
      <div v-for="(color, index) in this.$store.state.themes"
          class="theme-selector-item"
          @click="$emit('changeTheme', color)"
          :style="{backgroundColor:color}"
          :key="index"></div>
    </div>
    <img src="../assets/bin.png"
          class="theme-del-img"
          @click="$emit('delNote')"
          alt="Delete note">
  </div>
</template>

<script>
export default {
  name: 'ThemeSelector',
}
</script>

<style>
.theme-selector-container {
  width: 100%;
  height: 30px;
  background-color: #333333;
  position: relative;
}
.theme-selector-container:hover > .theme-selector-wrapper {
  height: 100%;
}
.theme-selector-bar {
  width: 100%;
  height: 100%;
}
.theme-del-img {
  width: 26px;
  height: 26px;
  position: absolute;
  right: 2px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.theme-selector-wrapper {
  width: 100%;
  height: 0%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: height 1s;
  transition: height 1s;
}
.theme-selector-item {
  width: 30px;
  height: 100%;
  float: left;
}
</style>
