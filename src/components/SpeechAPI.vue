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
      const fileUri = 'gs://guidy-app.appspot.com/audio/audio.raw'
      const encoding = 'LINEAR16';
      const sampleRateHertz = 16000;
      const languageCode = 'zh-CN';
      // const req = new Request('https://guidy-app.appspot.com/speech')
      const req = new Request('http://localhost:8081/speech')
      const body = {
        uri: fileUri,
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode
      }
      fetch(req, {
        method: 'POST',
        body: JSON.stringify(body),
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
