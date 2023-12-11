import api from "../api";

const whisper = async ({
  channel,
  message,
}) => api().chat.whisper(channel, message);

export default whisper;
