import light from "../light";
import device from "./device";

const play = async (videoId) => {
  await light.sync.video();

  const player = device.chromecast();

  if (player) {
    await new Promise((resolve, reject) => {
      try {
        player.play(videoId, resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
};

export default play;
