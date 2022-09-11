import express from "express";

import audio from "../audio";
import joke from "../joke";
import party from "../party";
import video from "../video";

const on = async () => {
  const app = express();
  const port = 8080;

  // TODO: This should auto expose homie as a OpenAPI 3.0 REST API

  app.get("/sound/play", (req, res) => {
    audio.play(req.query.file);
    res.send("OK");
  });

  app.get("/video/play", (req, res) => {
    video.play(`https://youtube.com/v/${req.query.id}`);
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
};

export default on;
