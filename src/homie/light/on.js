import { v3 } from "node-hue-api";

import state from "./state";

const { LightState } = v3.lightStates;

const on = async ({ id }) => state({ id, value: new LightState().on() });

export default on;
