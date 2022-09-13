import { v3 } from "node-hue-api";

import light from "../../light";

const { GroupLightState } = v3.lightStates;
const groupState = () => new GroupLightState();

const off = async () => {
  await light.group.setStates({
    "Patio": groupState().off(),
  });
};

export default off;
