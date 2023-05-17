import React, { useContext, useEffect, useState } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatBody from "./ChatBody";
import { Button } from "@mui/material";

const ChatPage = () => {
  const [messages, setMessages] = useState({});
  const [isRead, setIsRead] = useState(true); // checks that all 'applicable' chats are read - if false, this will disable sending of new messages
  const userCtx = useContext(UserContext);

  const getMessages = async () => {
    const { ok, data } = await fetchData("/api/chats/id", "POST", {
      chat_id: userCtx.patient._id,
    });
    if (ok) {
      var response = data;
      response.map((message) => {
        // adds a new 'Date' field to the output, that gives a readable Date, like May 17, 2023
        message.Date = new Date(message.msg_timeSent).toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        );
        // (this is just to tag on to the loop) if current message is unread and opposite role is the sender
        if (
          !message.msg_isRead &&
          ((userCtx.role == "staff" && !message.msg_fromNurse) ||
            (userCtx.role == "contact" && message.msg_fromNurse))
        ) {
          // set IsRead to update that not all 'applicable' chats are read
          setIsRead(false);
        }
      });

      // this makes a new object that sorts the data received by dates. { Date1: [{msgObj}, {msgObj}], Date2: [{msgObj}, {msgObj}, {msgObj}] }
      var partitioned = response.reduce((r, a) => {
        r[a.Date] = r[a.Date] || [];
        r[a.Date].push(a);
        return r;
      }, Object.create(null));

      setMessages(partitioned);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <ChatHeader />
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            height: "calc(100vh - 264px)",
          }}
        >
          <ChatInput getMessages={getMessages} isRead={isRead} />
          <ChatBody messages={messages} setIsRead={setIsRead} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
