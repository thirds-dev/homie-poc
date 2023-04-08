import api from "../api";
import connect from "./connect";

const part = async ({ channel }) => {
  await connect();
  await api.chat.part(channel);
};

export default part;
