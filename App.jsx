import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";
function App() {
  const socketRef = useRef(null);

  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  // create socket connection once
  useEffect(() => {
    socketRef.current = io("http://localhost:5000");

    socketRef.current.on("chat-history", (history) => {
      setChat(history);
    });

    socketRef.current.on("receive-message", (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const joinChat = () => {
    if (!username) return;
    setJoined(true);
    socketRef.current.emit("join", username);
  };

  const sendMessage = () => {
    if (!message) return;

    const msg = {
      user: username,
      text: message,
      time: new Date().toLocaleTimeString()
    };

    socketRef.current.emit("send-message", msg);
    setMessage("");
  };

if (!joined)
  return (
    <div className="join-screen">
      <h2>Join Chat</h2>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter name"/>
      <button onClick={joinChat}>Enter</button>
    </div>
  );

return (
  <div className="chat-container">
    <div className="header">Chatting</div>

    <div className="messages">
      {chat.map((m,i)=>(
        <div key={i} className={`msg ${m.user===username?"me":"other"}`}>
          <div><b>{m.user}</b></div>
          <div>{m.text}</div>
          <div className="time">{m.time}</div>
        </div>
      ))}
      <div ref={bottomRef}></div>
    </div>

    <div className="input-area">
      <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
);
}

export default App;