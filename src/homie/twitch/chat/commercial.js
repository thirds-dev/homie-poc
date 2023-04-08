import api from "../api";
import connect from "./connect";

const commercial = async ({ channel, length }) => {
    await connect();
    await api.chat.commercial(channel, length);
};

export default commercial;
