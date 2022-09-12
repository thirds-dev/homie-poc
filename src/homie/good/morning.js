import { v3 } from "node-hue-api";

import light from "../light";

const { GroupLightState } = v3.lightStates;

const morning = async () => light.group.setStates({
  "Living Room": new GroupLightState().on().brightness(100).scene('Day'),
});

export default morning;
