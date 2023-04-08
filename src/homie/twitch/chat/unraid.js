import api from "../api";
import connect from "./connect";

const unraid = async ({ channel }) => {
  await connect();
  await api.chat.unraid(channel);
};

export default unraid;
