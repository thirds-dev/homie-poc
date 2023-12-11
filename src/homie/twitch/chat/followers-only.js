import api from "../api";

const followersOnly = async ({
  channel,
  period,
}) => api().chat.followersOnly(
  channel,
  period,
);

export default followersOnly;
