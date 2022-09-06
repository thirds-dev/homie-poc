import { api } from "./api.js";

export const state = async (lightId, newState) => (
  (await api()).lights.setLightState(lightId, newState)
);
