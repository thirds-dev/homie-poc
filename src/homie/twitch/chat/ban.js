import api from "../api";
import connect from "./connect";

const ban = async ({ channel, username }) => {
    await connect();
    await api.chat.ban(channel, username);
};

export default ban;
