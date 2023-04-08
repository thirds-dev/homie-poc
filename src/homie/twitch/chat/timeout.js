import api from "../api";
import connect from "./connect";

const timeout = async ({ channel, username, timeout }) => {
  await connect();
  await api.chat.timeout(channel, username, timeout);
};

export default timeout;
