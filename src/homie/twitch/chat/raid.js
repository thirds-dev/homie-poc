import api from "../api";
import connect from "./connect";

const raid = async ({ channel, raidChannel }) => {
  await connect();
  await api.chat.raid(channel, raidChannel);
};

export default raid;
