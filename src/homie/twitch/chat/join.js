import api from "../api";
import connect from "./connect";

const join = async ({ channel }) => {
  await connect();
  await api.chat.join(channel);
};

export default join;
