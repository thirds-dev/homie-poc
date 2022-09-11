import api from "./api";

const state = async (lightId, newState) =>
  await (await api()).lights.setLightState(lightId, newState);

export default state;
