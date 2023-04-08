import api from "../api";
import connect from "./connect";

const say = async ({ channel, message, options }) => {
  await connect();
  await api.chat.say(channel, message, options);
};

export default say;
