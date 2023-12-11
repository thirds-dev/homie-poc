import api from "../api";

const join = async ({ channel }) => api().chat.join(channel);

export default join;
