import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import { runSocket } from "./routes/onConnections";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: `API`,
  });
});

app.get("/socket.io/socket.io.js", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "/node_modules/socket.io/client-dist/socket.io.js"
    )
  );
});

export const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
runSocket();

server.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
