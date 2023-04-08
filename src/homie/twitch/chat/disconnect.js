import api from "../api";
import connect from "./connect";

const disconnect = async ({ channel, color }) => {
    await api.chat.disconnect();
};

export default disconnect;
