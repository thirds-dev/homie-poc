import api from "../api";

const commercial = async ({
  channel,
  length,
}) => api().chat.commercial(
  channel,
  length,
);

export default commercial;
