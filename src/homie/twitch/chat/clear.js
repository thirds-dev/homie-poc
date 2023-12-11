import api from "../api";

const ban = async ({ channel }) => api().chat.clear(channel);

export default ban;
