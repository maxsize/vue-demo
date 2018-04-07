<template>
  <div class="vision-api-container">
    <!-- <input type="file" name="localFile" @change="handleFile"> -->
    <div v-if="!this.loading">
      <input ref='field' type="text" name="" id="">
      <button @click="handleSubmit">Submit</button>
      <span>{{this.annotation}}</span>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisionAPI',
  data: function () {
    return {
      loading: false,
      annotation: ''
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
      this.annotation = ''
      const req = new Request("https://guidy-app.appspot.com/detect/")
      // const jsonData = JSON.stringify(data)
      fetch(req, {
        method: 'POST',
        body: fileData,
        headers: new Headers({'Content-Type': 'application/text'})
      }).then(res => {
        const result = res.json()
        this.annotation = result
        this.loading = false
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
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
