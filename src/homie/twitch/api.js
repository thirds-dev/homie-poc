import TwitchJs from "twitch-js";
import fetchUtil from "twitch-js/lib/utils/fetch";

const onAuthenticationFailure = () =>
  fetchUtil("https://id.twitch.tv/oauth2/token", {
    method: "post",
    search: {
      grant_type: "refresh_token",
      refresh_token: process.env.TWITCH_REFRESH_TOKEN,
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
    },
  }).then((response) => response.accessToken);

let twitchjs = null;
const api = () => {
  return twitchjs || (twitchjs = new TwitchJs.default({
    clientId: process.env.TWITCH_CLIENT_ID,
    token: process.env.TWITCH_CHAT_ACCESS_TOKEN, 
    username: process.env.TWITCH_CHAT_USERNAME,
    onAuthenticationFailure
  }));
};

export default api;
