import { v3 } from "node-hue-api";

import light from "../light";

const { GroupLightState } = v3.lightStates;

const off = async () => light.group.setStates({
  "Living Room": new GroupLightState().off(),
  "Patio": new GroupLightState().off(),
});

export default off;
