import api from "../api";

const emoteOnlyOff = async ({ channel }) => api().chat.emoteOnlyOff(channel);

export default emoteOnlyOff;
