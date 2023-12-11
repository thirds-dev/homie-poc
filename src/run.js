import api from "./api";
import websocket from "./api/websocket";

import microphone from "./microphone";
import homie from "./homie";
import { WebSocket } from "ws";

const run = async () => {
  // listen to websocket
  websocket.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data) => {
      console.log('received: %s', data);
    });
    ws.send('something');
  });

  // start web api
  await api.on();

  // play I'm Listening file
  homie.audio.play.file({ path: "Listening.mp3" });

  // Connect to Twitch
  await homie.twitch.chat.connect();

  // Listen to Twitch events
  await homie.twitch.chat.listen({ topic: "*", handler:
    async (msg) => {
      websocket.clients.forEach((client) => {
        console.log(`${client.readyState}`);
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msg));
        }
      })
      console.log(msg)
      if (msg.event === 'JOIN') {
        await homie.twitch.chat.say({ channel: msg.channel, message: `Welcome ${msg.username}` });
        //await homie.twitch.chat.say({ channel: msg.channel, message: 'what up! '});
      }
    }
  });

  // Join rycamjamz
  homie.twitch.chat.join({ channel: 'rycamjamz '});
  
  // listen to microphone (if one is available)
  await microphone();
};

export default run;
