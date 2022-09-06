import playSound from "play-sound";

const player = playSound();

export const play = async (location) =>
  new Promise((resolve, reject) => {
    player.play(location, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

export default play;
