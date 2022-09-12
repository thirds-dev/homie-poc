import audio from "../audio";
import video from "../video";

const roll = async () => {
  await audio.play.notUnderstood();
  await video.play({ url: "https://youtube.com/watch?v=x31tDT-4fQw" });
};

export default roll;
