import { v3 } from "node-hue-api";

import state from "./state.js";

const { LightState } = v3.lightStates;

const off = async (lightId) => state(lightId, new LightState().off());

export default off;
