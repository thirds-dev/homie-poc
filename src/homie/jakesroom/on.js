import { v3 } from "node-hue-api";

import light from "../light";

const { GroupLightState } = v3.lightStates;
const groupState = () => new GroupLightState();

const morning = async () => {
  await light.group.setStates({
    "Jakes Bedroom": groupState().on(),
  });
};

export default morning;
