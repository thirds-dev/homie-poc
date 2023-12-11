import api from "../api";

const help = async ({ channel }) => api().chat.help(channel);

export default help;
