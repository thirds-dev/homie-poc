import api from "../api";
import connect from "./connect";

const unvip = async ({ channel, username }) => {
  await connect();
  await api.chat.unvip(channel, username);
};

export default unvip;
