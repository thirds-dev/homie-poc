import api from "../api";
import connect from "./connect";

const emoteOnly = async ({ channel }) => {
  await connect();
  await api.chat.emoteOnly(channel);
};

export default emoteOnly;
