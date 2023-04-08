import api from "../api";
import connect from "./connect";

const slowOff = async ({ channel }) => {
  await connect();
  await api.chat.slowOff(channel);
};

export default slowOff;
