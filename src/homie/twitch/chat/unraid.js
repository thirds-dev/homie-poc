import api from "../api";

const unraid = async ({ channel }) => api().chat.unraid(channel);

export default unraid;
