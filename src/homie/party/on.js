import audio from "../audio";
import video from "../video";
import light from "../light";
import lights from "../lights";
import repeat from "../repeat";
import sleep from "../sleep";

const lightsRandomColor = async () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return Promise.all([
    light.rgb({ id: 9, red, green, blue }),
    light.rgb({ id: 6, red, green, blue }),
    light.rgb({ id: 2, red, green, blue }),
    light.rgb({ id: 3, red, green, blue }),
    light.rgb({ id: 4, red, green, blue })
  ]);
};

const on = async () => {
  await audio.play.understood();
  await lights.on();
  /*
  await repeat({ count: 20 }, async () => {
    await lightsRandomColor();
    await sleep({ seconds: 1 });
  });
  */
  await video.play({ url: "https://youtube.com/watch?v=Ig2D6xa_-IM" });
};

export default on;
