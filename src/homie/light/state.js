import api from "./api";

const state = async ({ id, value }) =>
  await (await api()).lights.setLightState(id, value);

export default state;
