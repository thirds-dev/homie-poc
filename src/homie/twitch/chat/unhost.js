import api from "../api";
import connect from "./connect";

const unhost = async ({ channel }) => {
  await connect();
  await api.chat.unhost(channel);
};

export default unhost;
