import homie from "./homie";

const run = async () => {
  // start web api
  await homie.api.on();

  // play I'm Listening file
  homie.audio.play.file("./music/Listening.mp3");

  // listen to microphone (if one is available)
  await homie.audio.record.microphone();
};

export default run;
