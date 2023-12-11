import api from "../api";

const ban = async ({
  channel,
  username,
}) => api().chat.ban(
  channel,
  username,
);

export default ban;
