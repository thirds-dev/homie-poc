import api from "../api";

const send = async ({
  message,
  options
}) => api().chat.send(
  message,
  options,
);

export default send;
