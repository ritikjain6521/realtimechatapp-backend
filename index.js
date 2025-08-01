

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Socket.io server is running.");
});

const io = new Server(server, {
  cors: {
    origin: "https://your-frontend.vercel.app", // ✅ change to your actual Vercel frontend URL
    methods: ["GET", "POST"]
  }
});

const users = {};
app.get('/', (req, res) => {
  res.send('Hello World!')
})

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

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  
