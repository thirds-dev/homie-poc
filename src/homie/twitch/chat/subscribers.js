import api from "../api";
import connect from "./connect";

const subscribers = async ({ channel }) => {
  await connect();
  await api.chat.subscribers(channel);
};

export default subscribers;
