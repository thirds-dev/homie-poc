import api from "../api";
import connect from "./connect";

const listen = async ({ topic, handler }) => {
  await connect();
  api.chat.on(topic, handler);
};

export default listen;

/*
// Listen to all events
chat.on('*', message => {
    // Do stuff with message ...
  })
  
  // Listen to private messages
  chat.on('PRIVMSG', privateMessage => {
    // Do stuff with privateMessage ...
  })

  // Listen to subscriptions only
chat.on('USERNOTICE/SUBSCRIPTION', userStateMessage => {
    // Do stuff with userStateMessage ...
  })
  
  // Listen to all user notices
  chat.on('USERNOTICE', userStateMessage => {
    // Do stuff with userStateMessage ...
  })
*/