import React, { useState, useEffect } from 'react';
import { getChatApi, sendMessage } from '../api/chat';

const ChatSystem = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    fetchChatMessages();
  }, []);

  const fetchChatMessages = async () => {
    const messages = await getChatApi();
    setChatMessages(messages);
  };

  const handleSendMessage = async () => {
    if (messageInput.trim() !== '') {
      const newMessage = await sendMessage(messageInput);
      setChatMessages([...chatMessages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <div className="chatContainer">
      {chatMessages.map((message, index) => (
        <div key={index} className="message">
          <p>{message}</p>
        </div>
      ))}
      <div className="messageInputContainer">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatSystem;