import React, { useContext } from "react";
import styles from "./ChatMessage.module.css";
import UserContext from "../context/user"

const ChatMessage = (props) => {
  const userDetails = useContext(UserContext)
  const messageDetails = props.message

  console.log('a', userDetails.userID)

  return (
    <div className={styles["main-container"]}>
      
        <div className={styles["message-details"]} style={ messageDetails.msg_senderId === userDetails.userID ? { marginLeft: 'auto'} : {marginRight : 'auto'} }  >
          <div className={styles["sender"]}>{messageDetails.msg_senderId}</div>
          <div className={styles["message-text"]} style={ messageDetails.msg_senderId === userDetails.userID ? { marginLeft: 'auto'} : {marginRight : 'auto'} }>{messageDetails.msg_content}</div>
          <div className={styles["time-stamp"]}>
            <input
              type="checkbox"
              value="read" 
              // it will be checked if isRead is true
              checked={messageDetails.msg_isRead}
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
