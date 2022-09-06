import * as light from "../light";
import { chromecast } from "./device";

export const play = async (videoId) => {
  await light.sync.video();

  const device = chromecast();

  if (device) {
    await new Promise((resolve, reject) => {
      try {
        device.play(videoId, resolve);
      } catch (err) {
        reject(err);
      }
    });
  }
};
