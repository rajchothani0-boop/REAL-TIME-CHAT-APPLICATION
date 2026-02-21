const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

let messages = [];

// load old messages
try {
  const data = fs.readFileSync("messages.json");
  messages = JSON.parse(data);
} catch {
  messages = [];
}

// save messages
function saveMessages() {
  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));
}

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.emit("chat-history", messages);

  socket.on("join", (username) => {
    const msg = {
      user: "System",
      text: username + " joined the chat",
      time: new Date().toLocaleTimeString()
    };
    messages.push(msg);
    saveMessages();
    io.emit("receive-message", msg);
  });

  socket.on("send-message", (msg) => {
    messages.push(msg);
    saveMessages();
    io.emit("receive-message", msg);
  });
});

server.listen(5000, () => console.log("Server running on 5000"));