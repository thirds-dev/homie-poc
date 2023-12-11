import api from "../api";

const unhost = async ({ channel }) => api().chat.unhost(channel);

export default unhost;
