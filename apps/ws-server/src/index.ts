import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  try {
    await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    socket.send("Hi there! You are connected to the server and DB is working ✅");
  } catch (error) {
    console.error("DB Error:", error);
    socket.send("DB Error ❌ Check server logs");
  }
});
