import { v3 } from "node-hue-api";

import byName from "../../util/by-name";
import light from "../light";
import scene from "../scene";

const { GroupLightState } = v3.lightStates;
const groupState = () => new GroupLightState();

const night = async () => {
  const scenes = await scene.list();

  await light.group.setStates({
    Patio: groupState().off(),
    "Living Room": groupState()
      .on()
      .scene(scenes.find(byName("Night")).id),
  });
};

export default night;
