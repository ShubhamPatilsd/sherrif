import { Server, Socket } from "socket.io";
import { sendFile } from "./sendFile";
import { generateName } from "../../util/generateName";
import { server } from "../app";
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

export const connections = new Map();

export const onConnection = (socket: Socket) => {
  const name = generateName();
  io.to(socket.id).emit("assignName", name);
  connections.set(socket.id, name);
  socket.on("sendFile", sendFile);
};

export const runSocket = () => {
  io.on("connection", onConnection);
};
