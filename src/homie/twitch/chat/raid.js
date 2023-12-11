import api from "../api";

const raid = async ({
  channel,
  raidChannel,
}) => api().chat.raid(
  channel,
  raidChannel,
);

export default raid;
