import path from "path";
import playSound from "play-sound";

const player = playSound();

export const file = async ({ path: filePath }) =>
  new Promise((resolve, reject) => {
    try {
      player.play(path.join(process.cwd(), 'music', filePath), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } catch (err) {
      reject(err);
    }
  });

export default file;
