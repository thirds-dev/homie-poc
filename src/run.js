import api from "./api";
import microphone from "./microphone";
import homie from "./homie";

const run = async () => {
  // start web api
  await api.on();

  // play I'm Listening file
  homie.audio.play.file({ path: "Listening.mp3" });

  // listen to microphone (if one is available)
  await microphone();
};

export default run;
