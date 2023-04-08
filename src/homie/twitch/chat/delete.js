import api from "../api";
import connect from "./connect";

const deleteMessage = async ({ channel, targetMessageId }) => {
    await connect();
    await api.chat.delete(channel, targetMessageId);
};

export default deleteMessage;
