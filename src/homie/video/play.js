import light from "../light";
import device from "./device";
//import websocket from "../../api/websocket";

const play = async ({ url }) => {
  /*websocket.clients.forEach((client) => {
    console.log(`${client.readyState}`);
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        command: "VIDEO",
        url,
      }));
    }
  })*/
 //await light.sync.video();

  //const player = device.chromecast();
/*
  if (player) {
    await new Promise((resolve, reject) => {
      try {
        player.play(url, resolve);
      } catch (err) {
        reject(err);
      }
    });
  }*/

  
};

export default play;
