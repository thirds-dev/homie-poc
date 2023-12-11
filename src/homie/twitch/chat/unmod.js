import api from "../api";

const unmod = async ({ channel }) => api().chat.unmod(channel);

export default unmod;
