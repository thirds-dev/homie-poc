import audio from "../audio";
import lights from "../lights";

const off = async () => {
  await audio.play.understood();
  await lights.off();
}

export default off;
