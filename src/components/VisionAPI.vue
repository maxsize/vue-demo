<template>
  <div class="vision-api-container">
    <!-- <input type="file" name="localFile" @change="handleFile"> -->
    <div v-if="!this.loading" class="vision-api-form">
      <h2>Demostrate Google Cloud Vision API</h2>
      <input ref='field' type="text" placeholder="put image url here" :style="{margin:'10px'}">
      <button @click="handleSubmit" :style="{margin:'10px'}">Submit</button>
      <!-- <span :style="{margin:'10px'}">{{JSON.stringify(this.annotation)}}</span> -->
      <detect-result v-if="this.annotation" :annotation="this.annotation"/>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import DetectResult from "./DetectResult";

export default {
  name: 'VisionAPI',
  components: {
    DetectResult
  },
  data: function () {
    return {
      loading: false,
      annotation: null
    }
  },
  methods: {
    handleFile: function (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.handleFetch(reader.result)
      }
    },
    handleSubmit: function () {
      const url = this.$refs.field.value
      this.handleFetch(url)
    },
    handleFetch (fileData) {
      this.loading = true
      this.annotation = null
      const req = new Request("https://guidy-app.appspot.com/detect/")
      // const jsonData = JSON.stringify(data)
      fetch(req, {
        method: 'POST',
        body: fileData,
        headers: new Headers({'Content-Type': 'application/text'})
      }).then(res => {
        res.json().then(value => {
          this.annotation = value
          this.loading = false
        })
      }).catch(error => {
        this.loading = false
        this.annotation = error
      })
    }
  }
}
</script>

<style>
.vision-api-container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
}
.vision-api-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
