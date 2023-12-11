import { WebSocketServer } from "ws";
import server from "./server";

const websocket = new WebSocketServer({ server });

export default websocket;
