import api from "../api";
import connect from "./connect";

const help = async ({ channel }) => {
    await connect();
    await api.chat.help(channel);
};

export default help;
