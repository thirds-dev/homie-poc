import path from "path";
import playSound from "play-sound";

const player = playSound();

export const file = async ({ path: filePath }) =>
  new Promise((resolve, reject) => {
    try {
      const absolutePath = path.join(process.cwd(), "music", filePath);
      const handler = (err) => (err ? reject(err) : resolve());

      player.play(absolutePath, handler);
    } catch (err) {
      reject(err);
    }
  });

export default file;
