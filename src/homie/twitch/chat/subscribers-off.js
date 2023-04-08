import api from "../api";
import connect from "./connect";

const subscribersOff = async ({ channel }) => {
  await connect();
  await api.chat.subscribersOff(channel);
};

export default subscribersOff;
