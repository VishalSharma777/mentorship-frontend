import React, { useEffect } from "react";
import Inbox from "../Messages/Inbox";
import SendMessageForm from "../Messages/MessageForm";
import { Link, useParams } from "react-router-dom";
import { useLoggedInUser } from "../../hooks/menteesHooks";
import { baseUrl } from "../../../Url";

const MessagingContainer = () => {
  const { loggedInUser, loggedUser } = useLoggedInUser();
  useEffect(() => {
    loggedInUser();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Example: Fetch user's messages, recipient list, or other necessary data
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [userId]);
  const params = useParams();
  console.log("jcjc" ,params);
  const { userId } = params;
  console.log("esjkdfdjfdss", userId);
  const handleSendMessage = async ({ recipientId, content }) => {
    try {
      const authToken = localStorage.getItem("token");
      await fetch(` ${baseUrl}/api/v1/messages/send/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          content: content,
        }),
      });
      // Optionally, update state or show a success message
    } catch (err) {
      console.error(err);
      // Handle errors
    }
  };

  return (
    <div>
      <SendMessageForm
        recipientId={userId}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagingContainer;
