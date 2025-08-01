

const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Socket.io backend running");
});

const io = new Server(server, {
  cors: {
    origin: "https://realtimechatapp-frontend.vercel.app", // ✅ No trailing slash
    methods: ["GET", "POST"],
    credentials: true // Optional: if using cookies or auth headers
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
  
