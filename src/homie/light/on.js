import { v3 } from "node-hue-api";

import state from "./state";

const { LightState } = v3.lightStates;

const on = async (lightId) => state(lightId, new LightState().on());

export default on;
