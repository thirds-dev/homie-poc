import api from "../api";
import connect from "./connect";

const send = async ({ message, options }) => {
  await connect();
  await api.chat.send(message, options);
};

export default send;
