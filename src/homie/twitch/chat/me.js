import api from "../api";

const me = async ({
  channel,
  text,
}) => api().chat.me(
  channel,
  text,
);

export default me;
