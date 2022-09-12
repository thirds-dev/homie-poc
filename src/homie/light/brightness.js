import { v3 } from "node-hue-api";

import state from "./state";

const { LightState } = v3.lightStates;

const brightness = async ({ id, value }) =>
  state({ id, value: new LightState().brightness(value) });

export default brightness;
