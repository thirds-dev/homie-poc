import api from "../api";
import connect from "./connect";

const color = async ({ channel, color }) => {
    await connect();
    await api.chat.color(channel, color);
};

export default color;
