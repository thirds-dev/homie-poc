import api from "../api";
import connect from "./connect";

const unban = async ({ channel, username }) => {
    await connect();
    await api.chat.unban(channel, username);
};

export default unban;

