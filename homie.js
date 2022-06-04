const fs = require("fs");

const Picovoice = require("@picovoice/picovoice-node");
const PvRecorder = require("@picovoice/pvrecorder-node");
const axios = require("axios");
const ChromecastApi = require("chromecast-api");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const philipsHueSyncKey = process.env.PHILIPS_HUE_SYNC_ACCESS_KEY;
const accessKey = process.env.PICOVOICE_ACCESS_KEY;

const devices = PvRecorder.getAudioDevices();
let isInterrupted = false;

const { discovery, api, v3 } = require('node-hue-api');
const { ok } = require("assert");
const LightState = v3.lightStates.LightState;

const USERNAME = process.env.PHILIPS_HUE_USERNAME
  , CLIENT_KEY = process.env.PHILIPS_HUE_CLIENT_KEY
  // The name of the light we wish to retrieve by name
  , LIGHT_ID = 1;

const player = require('play-sound')(opts = {});

function playSound(location) {
  player.play(location, function (err) {
    if (err) throw err;
    console.log("Audio finished");
  });
}

async function playVideo(vidId) {
  axios({
    method: "PUT",
    url: `https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution`,
    headers: {
      Authorization: `Bearer ${philipsHueSyncKey}`
    },
    data: {
      mode: "video",
      toggleSyncActive: true
    }
  });

  const chromecast = new ChromecastApi();
  const shields = chromecast.devices.filter((d) => d.friendlyName === process.env.CHROMECAST_NAME);
  const shield = shields.length ? shields[0] : null;
  if (shield) {
    console.log(shield);
    shield.play(vidId, function () {
      console.log('playing on shield');
    });
  }
}

function joke() {
  var jokes = fs.readdirSync('./music/jokes');
  const index = Math.round(Math.random() * (jokes.length - 1));
  console.log(index);
  playSound(`./music/jokes/${jokes[index]}`);
}

function partyLightOn() {
  discovery.nupnpSearch()
    .then(searchResults => {
      const host = searchResults[0].ipaddress;
      console.log('hue switch ip: ' + host);
      return api.createLocal(host).connect(USERNAME);
    })
    .then(api => {
      const state = new LightState().On();

      return Promise.all([
        api.lights.setLightState(9, state),
        api.lights.setLightState(6, state),
        api.lights.setLightState(2, state),
        api.lights.setLightState(3, state),
        api.lights.setLightState(4, state),

      ]);
    })
    .then(result => {
      // console.log(result);
    });
}

function partyLightOff() {
  discovery.nupnpSearch()
    .then(searchResults => {
      const host = searchResults[0].ipaddress;
      return api.createLocal(host).connect(USERNAME);
    })
    .then(api => {
      const state = new LightState().Off();

      return Promise.all([
        api.lights.setLightState(9, state),
        api.lights.setLightState(6, state),
        api.lights.setLightState(2, state),
        api.lights.setLightState(3, state),
        api.lights.setLightState(4, state),

      ]);
    })
    .then(result => {
      // console.log(result);
    });
}

async function startParty() {
  playVideo("Ig2D6xa_-IM");
  axios({
    method: "PUT",
    url: `https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution`,
    headers: {
      Authorization: `Bearer ${philipsHueSyncKey}`
    },
    data: {
      mode: "video",
      toggleSyncActive: true
    }
  });
}

async function endParty() {
  axios({
    method: "PUT",
    url: "https://${process.env.PHILIPS_HUE_SYNC_IP}/api/v1/execution",
    headers: {
      Authorization: `Bearer ${philipsHueSyncKey}`
    },
    data: {
      mode: "powersave"
    }
  });
}

async function notUnderstood() {
  var jokes = fs.readdirSync('./music/idk');
  const index = Math.round(Math.random() * (jokes.length - 1));
  console.log(index);
  playSound(`./music/idk/${jokes[index]}`);
}

async function understood() {
  var jokes = fs.readdirSync('./music/ok');
  const index = Math.round(Math.random() * (jokes.length - 1));
  console.log(index);
  playSound(`./music/ok/${jokes[index]}`);
}

async function runHomie() {
  let keywordCallback = function (keyword) {
    console.log(`Wake word detected.`);

    playSound('./music/Listening.mp3');

    console.log(
      `Listening for speech within the context. Please speak your phrase into the microphone. `
    );
  };

  let inferenceCallback = function (inference) {
    console.log("Inference:");
    console.log(JSON.stringify(inference, null, 4));

    if (inference.intent === "party.start") {
      understood();
      startParty();
    } else if (inference.intent === "party.end") {
      understood();
      endParty();
    } else if (inference.intent === "rick.roll") {
      notUnderstood();
      playVideo("x31tDT-4fQw");
    } else if (inference.intent === "joke") {
      joke();
    } else if (inference.intent === "0.0")  {
      playSound(`./music/0div0.mp3`);
    } else if (inference.intent === "think") {
      playSound(`./music/think.mp3`);
    } else if (inference.intent === "hello") {
      var jokes = fs.readdirSync('./music/hi');
      const index = Math.round(Math.random() * (jokes.length - 1));
      console.log(index);
      playSound(`./music/hi/${jokes[index]}`);
    } else {
      notUnderstood();
    }

    console.log(`Listening for wake word...`);
  };

  const handle = new Picovoice(
    accessKey,
    './yo-homie.ppn',
    keywordCallback,
    './yo-homie.rhn',
    inferenceCallback,
    0.5,
    0.5
  );

  const frameLength = handle.frameLength;
  const recorder = new PvRecorder(-1, frameLength);
  recorder.start();

  console.log(`Using device: ${recorder.getSelectedDevice()}...`);
  console.log("Context info:");
  console.log("-------------");
  console.log(handle.contextInfo);
  console.log("Press ctrl+c to exit.");

  while (!isInterrupted) {
    const pcm = await recorder.read();
    handle.process(pcm);
  }
}

// setup interrupt
process.on("SIGINT", function () {
  isInterrupted = true;
});

(async function () {
  try {
    await runHomie();
  } catch (e) {
    console.error(e.toString());
  }
})();
