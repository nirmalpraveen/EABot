import React from 'react';
import './Message.css';

const Message = ({ text, sender }) => (
  <div className={`message ${sender}`}>
    <div className="message-content">
      <p>{text}</p>
    </div>
  </div>
);

export default Message;
