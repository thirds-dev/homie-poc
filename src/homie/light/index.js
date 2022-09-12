import sync from "./sync";
import api from "./api";
import brightness from "./brightness";
import off from "./off";
import on from "./on";
import rgb from "./rgb";
import state from "./state";

const light = {
  sync,
  api,
  brightness,
  on,
  off,
  rgb,
  state,
};

export default light;
