import api from "../api";

const mod = async ({
  channel,
  username,
}) => api().chat.mod(
  channel,
  username,
);

export default mod;
