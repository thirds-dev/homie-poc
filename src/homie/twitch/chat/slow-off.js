import api from "../api";

const slowOff = async ({ channel }) => api.chat.slowOff(channel);

export default slowOff;
