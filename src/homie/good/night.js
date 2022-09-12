import { v3 } from "node-hue-api";

import light from "../light";

const { GroupLightState } = v3.lightStates;

const night = async () => light.group.setStates({
  "Living Room": new GroupLightState().on().brightness(30).scene('Blue'),
  "Patio": new GroupLightState().off(),
});

export default night;
