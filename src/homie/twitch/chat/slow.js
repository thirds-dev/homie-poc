import api from "../api";

const slow = async ({
  channel,
  seconds,
}) => api().chat.slow(
  channel,
  seconds,
);

export default slow;
