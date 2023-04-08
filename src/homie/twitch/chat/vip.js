import api from "../api";
import connect from "./connect";

const vip = async ({ channel, username }) => {
  await connect();
  await api.chat.vip(channel, username);
};

export default vip;
