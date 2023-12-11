import api from "../api";

const say = async ({
  channel,
  message,
  options
}) => api().chat.say(
  channel,
  message,
  options,
);

export default say;
