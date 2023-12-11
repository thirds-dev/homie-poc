import api from "../api";

const deleteMessage = async ({
  channel,
  targetMessageId,
}) => api().chat.delete(
  channel,
  targetMessageId,
);

export default deleteMessage;
