import api from "../api";
import connect from "./connect";

const whisper = async ({ channel, message }) => {
  await connect();
  await api.chat.whisper(channel, message);
};

export default whisper;
