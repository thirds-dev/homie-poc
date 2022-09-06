import { v3 } from "node-hue-api";

import { state } from "./state.js";

const { LightState } = v3.lightStates;

export const on = (lightId) => state(lightId, new LightState().on());
