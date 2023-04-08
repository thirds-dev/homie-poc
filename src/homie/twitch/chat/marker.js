import api from "../api";
import connect from "./connect";

const marker = async ({ channel, text }) => {
  await connect();
  await api.chat.marker(channel, text);
};

export default marker;
