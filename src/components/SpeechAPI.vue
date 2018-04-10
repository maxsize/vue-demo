<template>
  <div>
    <span>Forbidden city</span><br>
    <button @click="handleFetch">Demostrate</button><br>
    <pre></pre>
  </div>
</template>

<script>
export default {
  name: 'SpeechAPI',
  methods: {
    handleFetch () {
      const fileUri = 'gs://guidy-app.appspot.com/audio/forbidden-city.flac'
      // const req = new Request('https://guidy-app.appspot.com/speech')
      const req = new Request('http://localhost:8081/speech')
      fetch(req, {
        method: 'POST',
        body: fileUri,
        headers: new Headers({'Content-Type': 'application/text'})
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
