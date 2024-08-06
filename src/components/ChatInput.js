import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-input-container">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
        placeholder="Type a message..."
        aria-label="Type a message"
        className="chat-input"
        rows="1"
      />
      <button onClick={handleSend} className="chat-send-button">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
