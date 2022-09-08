import { Socket } from "socket.io";
import { sendFile } from "./sendFile";

export const onConnection = (socket: Socket) => {
  socket.on("sendFile", sendFile);
};
