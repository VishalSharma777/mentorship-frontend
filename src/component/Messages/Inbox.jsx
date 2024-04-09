import React, { useState, useEffect } from "react";
import "./inbox.css"
import { baseUrl } from "../../../Url";
const Inbox = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  console.log(messages)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const authToken = localStorage.getItem("token");
        const response = await fetch(
          `${baseUrl}/api/v1/messages/inbox` , {
            method : "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`

          }
        }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        console.log("datatatta",data);
        setMessages(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div className="message-inbox">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <div className="bg-white m-4 p-6 rounded shadow text-black">
                <strong>{message.sender.name}:</strong>

                {message.content}
                <br />
                <small>{new Date(message.timestamp).toLocaleString()}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inbox;
