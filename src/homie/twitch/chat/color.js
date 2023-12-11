import api from "../api";

const color = async ({
  channel,
  color,
}) => api().chat.color(
  channel,
  color,
);

export default color;
