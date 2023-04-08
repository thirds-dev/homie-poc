import api from "../api";
import connect from "./connect";

const unmod = async ({ channel }) => {
  await connect();
  await api.chat.unmod(channel);
};

export default unmod;
