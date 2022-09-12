import { v3 } from "node-hue-api";

import light from "../light";
import scene from "../scene";

const { GroupLightState } = v3.lightStates;

const morning = async () => {
  const scenes = await scene.list();

  await light.group.setStates({
    "Living Room": new GroupLightState()
      .on()
      .scene(scenes.find((s) => s.name === "Day").id),
  });
};

export default morning;
