import path from "path";

import { Picovoice } from "@picovoice/picovoice-node";
import PvRecorder from "@picovoice/pvrecorder-node";

import joke from "../../joke";
import party from "../../party";
import video from "../../video";

import play from "../play";
import device from "./device";

const keywordCallback = async (keyword) => {
    console.log(`Wake word detected.`, keyword);
  
    await play.file("./music/Listening.mp3");
  
    console.log(
      `Listening for speech within the context. Please speak your phrase into the microphone. `
    );
  };

const inferenceCallback = async (inference) => {
  console.log("Inference:");
  console.log(JSON.stringify(inference, null, 4));

  try {
    if (inference.intent === "party.start") {
      await play.understood();
      await party.on();
    } else if (inference.intent === "party.end") {
      await play.understood();
      await party.off();
    } else if (inference.intent === "rick.roll") {
      await play.notUnderstood();
      await video.play("x31tDT-4fQw");
    } else if (inference.intent === "joke") {
      await joke.random();
    } else if (inference.intent === "0.0") {
      await play.file("./music/0div0.mp3");
    } else if (inference.intent === "think") {
      await play.file("./music/think.mp3");
    } else if (inference.intent === "hello") {
      await play.random("./music/hi");
    } else {
      await play.notUnderstood();
    }
  } catch (err) {
    console.log("error occurred", err);
  }

  console.log(`Listening for wake word...`);
};

const microphone = async () => {
  const handle = new Picovoice(
    process.env.PICOVOICE_ACCESS_KEY,
    path.join(process.cwd(), "yo-homie-mac.ppn"),
    keywordCallback,
    path.join(process.cwd(), "yo-homie-mac.rhn"),
    inferenceCallback
  );

  const frameLength = handle.frameLength;
  const deviceIndex = device
    .list()
    .findIndex((d) => d.includes("HyperX"));
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
}

export default microphone;
