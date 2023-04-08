import api from "../api";
import connect from "./connect";

const followersOnlyOff = async ({ channel }) => {
  await connect();
  await api.chat.followersOnlyOff(channel);
};

export default followersOnlyOff;
