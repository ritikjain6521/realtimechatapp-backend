const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*", // Optional: browser preflight
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  });
  res.end("Socket.IO Server Running");
});


const io = new Server(server, {
  cors: {
    origin: "https://realtimechatapp-frontend.vercel.app", // ✅ Replace with your Vercel frontend domain
    methods: ["GET", "POST"]
  }
});

const users = {};

io.on("connection", socket => {
  socket.on("new-user-joined", name => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", message => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id]
    });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("left", users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
