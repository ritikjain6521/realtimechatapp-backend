# 💬 Real-Time Chat App

A real-time chat application built using **Socket.IO**, **Node.js**, **HTML/CSS/JS** that allows multiple users to communicate instantly. The app supports real-time message broadcasting, join/leave notifications, and a responsive chat UI.

[![Frontend Deploy](https://img.shields.io/badge/Frontend-Vercel-blue?style=flat&logo=vercel)](https://realtimechatapp-frontend.vercel.app)
[![Backend Deploy](https://img.shields.io/badge/Backend-Render-orange?style=flat&logo=render)](https://realtimechatapp-backend-xxxxx.onrender.com)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Enabled-lightgrey?style=flat&logo=socket.io)](https://socket.io/)

---

## 🚀 Live Demo

🔗 Frontend: [https://realtimechatapp-frontend.vercel.app](https://realtimechatapp-frontend.vercel.app)  
🔗 Backend: [(https://realtimechatapp-backend-16cq.onrender.com/)](https://realtimechatapp-backend-16cq.onrender.com/)

---

## 📸 Preview

![Chat Preview](https://user-images.githubusercontent.com/your-image-preview.png)

---

## 🔧 Tech Stack

| Frontend        | Backend     | Real-time |
|----------------|-------------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | ![Socket.io](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| ![JavaScript](https://img.shields.io/badge/JS-F7DF1E?style=flat&logo=javascript&logoColor=black) | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=black) |   |

---

## 🧩 Features

- ✅ Real-time messaging with Socket.IO
- ✅ Join and leave notifications
- ✅ User name prompt
- ✅ Left/right chat alignment
- ✅ Notification sound on message receive
- ✅ Responsive design
- ✅ Easy deploy on Vercel + Render

---

## ⚙️ Project Structure

### 📁 Backend (`/backend`)
- `server.js` – Socket.IO server handling user events
- `package.json` – dependencies and server start script

### 📁 Frontend (`/frontend`)
- `index.html` – main UI
- `style.css` – chat design
- `script.js` – frontend socket logic
- `ting.mp3` – message receive audio

---

## 🚀 Deployment Instructions

### ✅ Backend on Render

1. Push your backend code to GitHub
2. Go to [https://render.com](https://render.com)
3. Click **"New Web Service"**
4. Connect GitHub repository
5. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. CORS Config in `server.js`:
```js
const io = require("socket.io")(8000, {
  cors: {
    origin: "https://realtimechatapp-frontend.vercel.app",
    methods: ["GET", "POST"]
  }
});
