import { v3 } from "node-hue-api";

import light from "../light";

const { GroupLightState } = v3.lightStates;

const on = async () => light.group.setStates({
  "Living Room": new GroupLightState().on(),
  "Patio": new GroupLightState().on(),
});

export default on;
