import { v3 } from "node-hue-api";

import { state } from "./state.js";

const { LightState } = v3.lightStates;

export const off = (lightId) => state(lightId, new LightState().off());
