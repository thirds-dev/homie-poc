import api from "../api";
import connect from "./connect";

const followersOnly = async ({ channel, period }) => {
  await connect();
  await api.chat.followersOnly(channel, period);
};

export default followersOnly;
