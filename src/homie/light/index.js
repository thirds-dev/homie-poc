import sync from "./sync";
import api from "./api";
import brightness from "./brightness";
import getNew from "./get-new";
import get from "./get";
import group from "./group";
import list from "./list";
import off from "./off";
import on from "./on";
import remove from "./remove";
import rename from "./rename";
import rgb from "./rgb";
import state from "./state";

const light = {
  sync,
  api,
  brightness,
  getNew,
  get,
  group,
  list,
  on,
  off,
  remove,
  rename,
  rgb,
  state,
};

export default light;
