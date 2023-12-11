import api from "../api";

const broadcast = async ({ message }) => api().chat.broadcast(message);

export default broadcast;
