import api from "../api";
import connect from "./connect";

const me = async ({ channel, text }) => {
    await connect();
    await api.chat.me(channel, text);
};

export default me;
