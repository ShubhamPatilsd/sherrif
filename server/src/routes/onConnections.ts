import { Server, Socket } from "socket.io";
import { sendFile } from "./sendFile";
import { generateName } from "../../util/generateName";
const io = new Server();

export const onConnection = (socket: Socket) => {
  const name = generateName();
  io.to(socket.id).emit("assignName");
  socket.on("sendFile", sendFile);
};

export const runSocket = () => {
  io.on("connection", onConnection);
};
