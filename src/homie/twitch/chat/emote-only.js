import api from "../api";

const emoteOnly = async ({ channel }) => api().chat.emoteOnly(channel);

export default emoteOnly;
