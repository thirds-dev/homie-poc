import api from "../api";

const unblock = async ({ channel, username }) => api().chat.unblock(channel, username);

export default unblock;
