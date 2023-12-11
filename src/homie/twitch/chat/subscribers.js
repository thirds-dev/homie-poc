import api from "../api";

const subscribers = async ({ channel }) => api().chat.subscribers(channel);

export default subscribers;
