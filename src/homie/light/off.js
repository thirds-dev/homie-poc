import { v3 } from "node-hue-api";

import state from "./state.js";

const { LightState } = v3.lightStates;
const lightState = () => new LightState();

const off = async ({ id }) => state({ id, value: lightState().off() });

export default off;
