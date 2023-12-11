import http from "http";
import { WebSocketServer } from "ws";

import app from "./app";

const server = http.createServer(app);

export default server;
