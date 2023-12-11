import api from "../api";

const marker = async ({
  channel,
  text
}) => api().chat.marker(
  channel,
  text,
);

export default marker;
