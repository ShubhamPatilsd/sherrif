import express from "express";
import http from "http";
import { Server } from "socket.io";
import { onConnection } from "./routes/onConnections";
const io = new Server();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi there!");
});

io.on("connection", onConnection);

server.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
