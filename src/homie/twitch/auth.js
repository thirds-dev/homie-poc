

// Join multiple channels
const channels = ['#dallas', '#ronni']

Promise.all(channels.map(channel => chat.join(channel))).then(channelStates => {
  // Listen to all messages from #dallas only
  chat.on('#dallas', message => {
    // Do stuff with message ...
  })

  // Listen to private messages from #dallas and #ronni
  chat.on('PRIVMSG', privateMessage => {
    // Do stuff with privateMessage ...
  })

  // Listen to private messages from #dallas only
  chat.on('PRIVMSG/#dallas', privateMessage => {
    // Do stuff with privateMessage ...
  })

  // Listen to all private messages from #ronni only
  chat.on('PRIVMSG/#ronni', privateMessage => {
    // Do stuff with privateMessage ...
  })
})

// Broadcast to all channels
chat
  .broadcast('Kappa Keepo Kappa')
  // Optionally ...
  .then(userStateMessages => {
    // ... do stuff with userStateMessages on success ...
  })