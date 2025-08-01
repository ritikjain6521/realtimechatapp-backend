

const io = require('socket.io')( https://realtimechatapp-backend-16cq.onrender.com, {
  cors: {
    origin: "https://realtimechatapp-frontend.vercel.app/",
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
  
