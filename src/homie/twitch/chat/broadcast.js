import api from "../api";
import connect from "./connect";

const broadcast = async ({ message }) => {
  await connect();
  await api.chat.broadcast(message);
};

export default broadcast;
