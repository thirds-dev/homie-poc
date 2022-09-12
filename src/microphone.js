import path from "path";

import { Picovoice } from "@picovoice/picovoice-node";
import PvRecorder from "@picovoice/pvrecorder-node";

import homie from "./homie";
import party from "./homie/party";

const keywordCallback = async (keyword) => {
  console.log(`Wake word detected.`, keyword);

  await homie.audio.play.file({ path: "Listening.mp3" });

  console.log(
    `Listening for speech within the context. Please speak your phrase into the microphone. `
  );
};


const inferenceCallback = async (inference) => {
  console.log("Inference:");
  console.log(JSON.stringify(inference, null, 4));

  try {
    const path = inference.intent.split(".");
    const method = path.reduce(
      (prev, cur) => (cur && prev[cur] ? prev[cur] : prev),
      homie
    );

    await method();
  } catch (err) {
    console.log(err);
    await homie.audio.play.notUnderstood();
  }

  console.log(`Listening for wake word...`);
};

const microphone = async () => {
  const platforms = {
    darwin: "mac",
    win32: "win",
    linux: "pi",
  };
  const platform = platforms[process.platform] || platforms.linux;
  const handle = new Picovoice(
    process.env.PICOVOICE_ACCESS_KEY,
    path.join(process.cwd(), `yo-homie-${platform}.ppn`),
    keywordCallback,
    path.join(process.cwd(), `yo-homie-${platform}.rhn`),
    inferenceCallback
  );



  const frameLength = handle.frameLength;
  const deviceIndex = homie.audio.record.device.list().findIndex((d) => d.includes("HyperX"));
  console.log("deviceIndex: ", deviceIndex);
  const recorder = new PvRecorder(deviceIndex, frameLength);
  recorder.start();

  console.log(`Using device: ${recorder.getSelectedDevice()}...`);
  console.log("Context info:");
  console.log("-------------");
  console.log(handle.contextInfo);
  console.log("Press ctrl+c to exit.");

  while (true) {
    const pcm = await recorder.read();
    handle.process(pcm);
  }
};

export default microphone;
