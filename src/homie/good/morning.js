import { v3 } from "node-hue-api";

import byName from "../../util/by-name";
import light from "../light";
import scene from "../scene";

const { GroupLightState } = v3.lightStates;
const groupState = () => new GroupLightState();

const morning = async () => {
  const scenes = await scene.list();

  await light.group.setStates({
    "Living Room": groupState()
      .on()
      .scene(scenes.find(byName("Day")).id),
  });
};

export default morning;
