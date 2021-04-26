const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 2;
  voice.rate = 1.15;
  voice.pitch = 0;
  synth.speak(voice);
}


