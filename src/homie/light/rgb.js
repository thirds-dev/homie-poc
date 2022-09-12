import { v3 } from "node-hue-api";

import state from "./state";

const { LightState } = v3.lightStates;

const rgb = async ({ id, red, green, blue }) =>
  state({ id, value: new LightState().rgb(red, green, blue) });

export default rgb;
