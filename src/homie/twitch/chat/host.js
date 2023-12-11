import api from "../api";

const host = async ({
  channel,
  hostChannel,
}) => api().chat.host(
  channel,
  hostChannel
);

export default host;
