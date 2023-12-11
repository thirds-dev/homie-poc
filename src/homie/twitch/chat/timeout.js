import api from "../api";

const timeout = async ({
  channel,
  username,
  timeout,
}) => api().chat.timeout(channel, username, timeout);

export default timeout;
