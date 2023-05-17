import React, { useContext, useEffect, useState } from "react";
import styles from "./ChatMessage.module.css";
import UserContext from "../context/user"
import { fetchData } from "../helpers/common";

const ChatMessage = (props) => {
  const [read, setRead] = useState()
  const userDetails = useContext(UserContext)
  const messageDetails = props.message

  const readMessage = async() => {
    const { ok, data } = await fetchData('/api/chats/' + messageDetails._id, "PATCH", {
      msg_isRead: true
    })

    if (ok) {
      setRead(true)
      props.setIsRead(true)
      console.log('set read')
    } else {
      console.log('failed to set read')
    }
  }

  const handleClick = () => {
    if (!(messageDetails.msg_senderId == userDetails.userID)) {
      readMessage()
    }
  }

  function formatAMPM(date) {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }


  var messageBoxStyling = {}
  
  if (messageDetails.msg_senderId._id == userDetails.user._id['$oid']) {
    messageBoxStyling['marginLeft'] = 'auto'
    console.log('hi')
  } else {
    messageBoxStyling['marginRight'] = 'auto'
    console.log('bye')
  }
  console.log('usecxt', userDetails.user)
  console.log('fetch', messageDetails.msg_senderId)

  console.log(`check
  fet ${messageDetails.msg_senderId._id}
  ctx ${userDetails.user._id['$oid']}`)
  if (messageDetails.msg_fromNurse) {
    messageBoxStyling['borderColor'] = '#337E97';
    messageBoxStyling['backgroundColor'] = '#CCDFE5'
  } else {
    messageBoxStyling['borderColor'] = '#652C30';
    messageBoxStyling['backgroundColor'] = '#FEE2E4'
  }

  useEffect(()=> {
    setRead(messageDetails.msg_isRead)
  }, [])


  return (
    <div className={styles["main-container"]}>
      
        <div className={styles["message-details"]} style={ messageDetails.msg_senderId._id == userDetails.user._id['$oid'] ? { marginLeft: 'auto'} : {marginRight : 'auto'} }  >
          <div className={styles["sender"]}>{messageDetails.msg_senderId.firstName} {messageDetails.msg_senderId.lastName}</div>
          <div className={styles["message-text"]} style={messageBoxStyling}>{messageDetails.msg_content}</div>
          <div className={styles["time-stamp"]}>
            <input
              type="checkbox"
              value="read" 
              // it will be checked if isRead is true
              checked={read}
              // if isRead is true, the input will also be disabled
              disabled={read}
              
              onChange={handleClick}
            />{`   `}
            {formatAMPM(new Date(messageDetails.msg_timeSent))}
          </div>
        </div>

      
    </div>
  );
};

export default ChatMessage;
