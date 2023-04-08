import api from "../api";
import connect from "./connect";

const block = async ({ channel, username }) => {
    await connect();
    await api.chat.block(channel, username);
};

export default block;

