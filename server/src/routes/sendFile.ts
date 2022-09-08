import { Socket } from "socket.io";

export const sendFile = (file: File, socket: Socket) => {
  socket.broadcast.emit("receiveFile", file);
};
