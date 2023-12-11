import api from "../api";

const part = async ({ channel }) => api().chat.part(channel);

export default part;
