import api from "../api";

const unvip = async ({
  channel,
  username,
}) => await api().chat.unvip(channel, username);

export default unvip;
