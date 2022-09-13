import { v3 } from "node-hue-api";

import state from "./state";

const { LightState } = v3.lightStates;
const lightState = () => new LightState();

const brightness = async ({ id, value }) =>
  state({ id, value: lightState().brightness(value) });

export default brightness;
