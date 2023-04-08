import api from "../api";
import connect from "./connect";

const slow = async ({ channel, seconds }) => {
  await connect();
  await api.chat.slow(channel, seconds);
};

export default slow;
