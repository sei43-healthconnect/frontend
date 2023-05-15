import React, { useContext, useState } from "react";
import styles from "./ChatMessage.module.css";
import UserContext from "../context/user"
import { BorderColor } from "@mui/icons-material";

const ChatMessage = (props) => {
  const [senderName, setSenderName] = useState('')
  const userDetails = useContext(UserContext)
  const messageDetails = props.message
  
  const getSenderName = async() => {
    // only get the Sender Name from the database if the sender of the message is not the user
    if (messageDetails.msg_senderId != userDetails.userID) {

      // search staff db for name if message is from staff
      if (messageDetails.msg_fromNurse) {
        const { ok, data } = await fetchData('/api/staff/' + messageDetails.msg_senderId, "POST")

        if (ok) {
          setSenderName(data.staff_firstName + ' ' + data.staff_lastName)
        } else {
          console.log('damn error here', data)
        }

      // search contacts db for name if message is from family
      } else {
        const { ok, data } = await fetchData('/api/contacts/' + messageDetails.msg_senderId, "POST")

        if (ok) {
          setSenderName(data.contact_firstName + ' ' + data.staff_lastName)
        } else {
          console.log('damn error here instead', data)
        }
      }
    }
  }

  var messageBoxStyling = {}
  
  if (messageDetails.msg_senderId === userDetails.userID) {
    messageBoxStyling['marginLeft'] = 'auto'
  } else {
    messageBoxStyling['marginRight'] = 'auto'
  }

  if (messageDetails.msg_fromNurse) {
    messageBoxStyling['borderColor'] = '#337E97';
    messageBoxStyling['backgroundColor'] = '#CCDFE5'
  } else {
    messageBoxStyling['borderColor'] = '#652C30';
    messageBoxStyling['backgroundColor'] = '#FEE2E4'
  }

  return (
    <div className={styles["main-container"]}>
      
        <div className={styles["message-details"]} style={ messageDetails.msg_senderId === userDetails.userID ? { marginLeft: 'auto'} : {marginRight : 'auto'} }  >
          <div className={styles["sender"]}>{senderName}</div>
          <div className={styles["message-text"]} style={messageBoxStyling}>{messageDetails.msg_content}</div>
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
