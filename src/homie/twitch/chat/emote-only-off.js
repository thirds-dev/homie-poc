import api from "../api";
import connect from "./connect";

const emoteOnlyOff = async ({ channel }) => {
  await connect();
  await api.chat.emoteOnlyOff(channel);
};

export default emoteOnlyOff;
