import api from "../api";
import connect from "./connect";

const ban = async ({ channel }) => {
    await connect();
    await api.chat.clear(channel);
};

export default ban;
