

const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8000;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Socket.io chat server is running.");
});

// Attach socket.io to the server
const io = new Server(server, {
  cors: {
    origin: "https://realtimechatapp-frontend.vercel.app", // ✅ No trailing slash
    methods: ["GET", "POST"]
  }
});

const users = {};


io.on('connection', socket => {
  socket.on('new-user-joined', name => {
    console.log("New user:", name);
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
  });


  socket.on('disconnect', message => {
    socket.broadcast.emit('left',users[socket.id] );
    delete users[socket.id];
  });
})
  
