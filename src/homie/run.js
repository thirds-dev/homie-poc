import path from "path";
import express from "express";
import { Picovoice } from "@picovoice/picovoice-node";
import PvRecorder from "@picovoice/pvrecorder-node";

import * as audio from "./audio";
import * as joke from "./joke";
import * as party from "./party";
import * as video from "./video";

const isInterrupted = false;

const keywordCallback = async (keyword) => {
  console.log(`Wake word detected.`, keyword);

  await audio.play("./music/Listening.mp3");

  console.log(
    `Listening for speech within the context. Please speak your phrase into the microphone. `
  );
};

const inferenceCallback = async (inference) => {
  console.log("Inference:");
  console.log(JSON.stringify(inference, null, 4));

  try {
    if (inference.intent === "party.start") {
      await audio.understood();
      await party.on();
    } else if (inference.intent === "party.end") {
      await audio.understood();
      await party.off();
    } else if (inference.intent === "rick.roll") {
      await audio.notUnderstood();
      await video.play("x31tDT-4fQw");
    } else if (inference.intent === "joke") {
      await joke.random();
    } else if (inference.intent === "0.0") {
      await audio.play("./music/0div0.mp3");
    } else if (inference.intent === "think") {
      await audio.play("./music/think.mp3");
    } else if (inference.intent === "hello") {
      await audio.random("./music/hi");
    } else {
      await audio.notUnderstood();
    }
  } catch (err) {
    console.log('error occurred', err);
  }

  console.log(`Listening for wake word...`);
};

export const run = async () => {
  const app = express();
  const port = 3000;

  app.get("/sound/play", (req, res) => {
    audio.play(req.query.file);
    res.send("OK");
  });

  app.get("/video/play", (req, res) => {
    video.play(req.query.id);
    res.send("OK");
  });

  app.get("/joke/random", (req, res) => {
    joke.random();
    res.send("OK");
  });

  app.get("/party/start", (req, res) => {
    party.on();
    return true;
  });

  app.get("/party/stop", (req, res) => {
    party.off();
    res.send("OK");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  audio.play("./music/Listening.mp3");

  const handle = new Picovoice(
    process.env.PICOVOICE_ACCESS_KEY,
    path.join(process.cwd(), "yo-homie-mac.ppn"),
    keywordCallback,
    path.join(process.cwd(), "yo-homie-mac.rhn"),
    inferenceCallback
  );

  const frameLength = handle.frameLength;
  const deviceIndex = audio.device.list().findIndex((d) => d.includes("HyperX"));
  console.log("deviceIndex: ", deviceIndex);
  const recorder = new PvRecorder(deviceIndex, frameLength);
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
};
