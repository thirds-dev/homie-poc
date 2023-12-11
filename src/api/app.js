import express from "express";
import handler from "./handler";

const app = express();

app.use(handler);

export default app;
