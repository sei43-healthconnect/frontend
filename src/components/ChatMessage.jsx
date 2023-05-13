import React from "react";
import styles from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  const messageDetails = props.message

  return (
    <div className={styles["main-container"]}>
      {/* { (use context id == message sender id) ? className right-side : className left-side} */}
      <div className={styles["message-details"]}>


        <div className={styles["sender"]}>{messageDetails.sender}</div>


        <div className={styles["message-text"]}>{props.messageContent}</div>
        <div className={styles["time-stamp"]}>
          <input
            type="checkbox"
            value="read" 
            // it will be checked if isRead is true
            checked={props.isRead}
            // if isRead is true, the input will also be disabled
            disabled={props.isRead}
          />
          {props.timeSent}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
