import express from "express";
import http from "http";
import { Server } from "socket.io";
import { onConnection, runSocket } from "./routes/onConnections";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi there!");
});

runSocket();

server.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
