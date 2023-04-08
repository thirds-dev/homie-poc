// AccessToken is grabbed from OAuth2 authentication of the account.
const accessToken = "";
// JWT is available here: https://streamelements.com/dashboard/account/channels
const jwt = "";
const socket = io('https://realtime.streamelements.com', {
    transports: ['websocket']
});
// Socket connected
socket.on('connect', onConnect);
// Socket got disconnected
socket.on('disconnect', onDisconnect);
// Socket is authenticated
socket.on('authenticated', onAuthenticated);
socket.on('unauthorized', console.error);
socket.on('event:test', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-event
});
socket.on('event', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-event
});
socket.on('event:update', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-session-update
});
socket.on('event:reset', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-session-update
});


function onConnect() {
    console.log('Successfully connected to the websocket');
    socket.emit('authenticate', {method: 'oauth2', token: accessToken});
    //socket.emit('authenticate', {method: 'jwt', token: jwt});
}

function onDisconnect() {
    console.log('Disconnected from websocket');
    // Reconnect
}

function onAuthenticated(data) {
    const {
        channelId
    } = data;
    console.log(`Successfully connected to channel ${channelId}`);
}