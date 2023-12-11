import api from "../api";

const followersOnlyOff = async ({ channel }) => api().chat.followersOnlyOff(channel);

export default followersOnlyOff;
