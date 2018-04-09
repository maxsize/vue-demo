<template>
  <div class="google-cloud-container">
    <vision-a-p-i class="google-cloud-item"/>
    <translate-a-p-i class="google-cloud-item"/>
    <speech-a-p-i class="google-cloud-item"/>
  </div>
</template>

<script>
import VisionAPI from "./VisionAPI";
import TranslateAPI from "./TranslateAPI";
import SpeechAPI from "./SpeechAPI";

export default {
  name: 'GoogleCloud',
  components: {
    VisionAPI,
    TranslateAPI,
    SpeechAPI
  }
}
</script>

<style>
.google-cloud-container {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 90vh;
}
.google-cloud-item {
  min-width: 300px;
  min-height: 350px;
  margin: 10px;
  padding: 20px;
  background-color: rgb(231, 231, 231);
  border-style: solid;
  border-width: 1px;
  border-color: #494e6d;
}
</style>
