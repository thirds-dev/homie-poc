import audio from "../audio";
import light from "../light";

const lightsOff = async () => {
  await Promise.all([
    light.brightness({ id: 9, value: 30 }),
    light.brightness({ id: 6, value: 30 }),
    light.brightness({ id: 2, value: 30 }),
    light.brightness({ id: 3, value: 30 }),
    light.brightness({ id: 4, value: 30 })
  ]);

  return Promise.all([
    light.off({ id: 9 }),
    light.off({ id: 6 }),
    light.off({ id: 2 }),
    light.off({ id: 3 }),
    light.off({ id: 4 })
  ]);
};

const off = async () => {
  await audio.play.understood();
  await lightsOff();
}

export default off;
