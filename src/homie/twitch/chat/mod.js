import api from "../api";
import connect from "./connect";

const mod = async ({ channel, username }) => {
    await connect();
    await api.chat.mod(channel, username);
};

export default mod;
