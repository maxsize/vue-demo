<template>
  <div class="translate-api-container">
    <span></span><br>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <span>Translated to English</span>
    <textarea name="" id="" cols="30" rows="10" readonly></textarea>
  </div>
</template>

<script>
export default {
  name: 'TranslateAPI'
}
</script>

<style>
.translate-api-container {
  display: flex;
  flex-direction: column;
}
</style>
