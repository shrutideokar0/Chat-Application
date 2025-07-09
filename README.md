# Chat-Application
Got it! Here's your updated **README.md** — clean, detailed, and with **no deployment-related content**:

```markdown
# 💬 Chat Application

A real‑time chat app built using **Node.js** and **Socket.io** on the backend, and **HTML, CSS, JavaScript** on the frontend.

---

## ✨ Features

- Real-time messaging with Socket.io
- Simple and intuitive chat interface
- Built with vanilla JavaScript 
- Modular structure for frontend and backend

---

## 🏗️ Tech Stack

| Layer     | Technologies                  |
|-----------|-------------------------------|
| Frontend  | HTML · CSS · JavaScript       |
| Backend   | Node.js . Socket.io |
| Version Control | Git · GitHub            |

---

## 🗂️ Folder Structure

```

chat-application/
├── client/                # Frontend files
│   ├── index.html
│   ├── style.css
│   └── client.js
│
├── nodeServer/                # Backend files
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md

````

---

## 🚀 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/shrutideokar0/Chat-Application.git
   cd Chat-Application
````

2. **Install backend dependencies**

   ```bash
   cd nodeServer
   npm install
   ```

3. **Start the server**

   ```bash
   node index.js
   ```

4. **Open the frontend**

   Open `client/index.html` in your browser.

   (Optional: Use Live Server extension in VS Code for auto reload.)

---

## 💡 How It Works

* **Server** (`server/index.js`)

  * Uses Express to serve static files (optional)
  * Sets up a WebSocket server with Socket.io
  * Broadcasts messages to all connected clients

* **Client** (`client/index.html`, `chat.js`)

  * Connects to server using Socket.io client
  * Sends and receives chat messages
  * Displays messages in the browser in real-time

---
This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.
