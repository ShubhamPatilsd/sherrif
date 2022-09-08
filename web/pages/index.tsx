import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
// import Head from "next/head";
// import Image from "next/image";

const socket = io("http://localhost:5000");

const Home: NextPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      <h1>{isConnected}</h1>
    </div>
  );
};

export default Home;
