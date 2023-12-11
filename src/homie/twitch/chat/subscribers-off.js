import api from "../api";

const subscribersOff = async ({ channel }) => api().chat.subscribersOff(channel);

export default subscribersOff;
