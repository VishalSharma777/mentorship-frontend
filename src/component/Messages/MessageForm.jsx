import React, { useState } from "react";
import "./messageForm.css"
const SendMessageForm = ({ recipientId, onSendMessage }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({ recipientId, content });
    setContent("");
  };

  return (
    <div className="message-form-container">
    <form className="message-form" onSubmit={handleSubmit}>
      <label>
        Message:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button type="submit" className="message-btn">Send</button>
    </form>
    </div>
  );
};

export default SendMessageForm;
