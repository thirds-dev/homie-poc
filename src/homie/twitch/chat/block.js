import api from "../api";

const block = async ({
  channel,
  username,
}) => api().chat.block(
  channel,
  username,
);

export default block;
