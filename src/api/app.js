import express from "express";
import handler from "./handler";

let _app;

const app = () => {
  if (!_app) {
    _app = express();
    _app.use(handler);
  }

  return _app;
};

export default app;
