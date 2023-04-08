import api from "../api";
import connect from "./connect";

const unblock = async ({ channel, username }) => {
    await connect();
    await api.chat.unblock(channel, username);
};

export default unblock;
