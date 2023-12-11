import api from "../api";

const vip = async ({ channel, username }) => api().chat.vip(channel, username);

export default vip;
