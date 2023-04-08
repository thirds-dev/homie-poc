import api from "../api";
import connect from "./connect";

const host = async ({ channel, hostChannel }) => {
    await connect();
    await api.chat.host(channel, hostChannel);
};

export default host;
