import Speech from 'speak-tts';
const speech = new Speech();

if(speech.hasBrowserSupport()) { 
    console.log("speech synthesis supported")
}

speech.init({
  volume: 0.5,
  lang: "en-GB",
  rate: 1,
  pitch: 2,
  listeners: {
    onstart: () => {
        console.log("Start utterance")
    },
    onend: () => {
        console.log("End utterance")
    },
    onresume: () => {
        console.log("Resume utterance")
    },
    onboundary: (event) => {
        console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
    },
    onvoiceschanged: voices => {
        console.log("Voices changed", voices);
    }
  }
}).then((data) => {
  // The "data" object contains the list of available voices and the voice synthesis params
  console.log("Speech is ready, voices are available", data)
  // speech.speak({
  //   text: 'Hello, are you loloy?',
  // }).then(() => {
  //   console.log("Success !")
  // }).catch(e => {
  //   console.error("An error occurred :", e)
  // })
}).catch(e => {
  console.error("An error occured while initializing : ", e)
});

export default speech;