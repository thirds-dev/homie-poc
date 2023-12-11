import api from "../api";

const unban = async ({ channel, username }) => api().chat.unban(channel, username);

export default unban;

