import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './ChatBody.module.css'
import ChatMessage from './ChatMessage'
import UserContext from "../context/user"
import { fetchData } from '../helpers/common'
import ChatDateHeader from './ChatDateHeader'

const ChatBody = () => {
  const userCtx = useContext(UserContext)
  const bottomRef = useRef('')
  const [messages, setMessages] = useState({})

  const getMessages = async () => {
    const { ok, data } = await fetchData('/api/chats/id', "POST", {
      chat_id: userCtx.patient._id
    })

    if (ok) {
      var response = data
      response.map((message)=> {
        message.Date = new Date(message.msg_timeSent).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
      })
      
      var partitioned = response.reduce(function (r, a) {
        r[a.Date] = r[a.Date] || [];
        r[a.Date].push(a);
        return r;
      }, Object.create(null));

      setMessages(partitioned)
      bottomRef.current.scrollIntoView();
    } else {
      console.log(data)
    }
  }

  useEffect(()=> {
    getMessages()
  },[])
  

  return (
    <div className={styles['main-container']}>
      { Object.keys(messages).length > 0 &&
        // If messages exist, render all the messages
        Object.keys(messages).map((dateKey, idx)=> {
          return (
          <>
            <ChatDateHeader date={dateKey} key={`dateHeader${idx}`}/>
            {messages[dateKey].map((message) => {
              return (<ChatMessage id={message._id} key={message._id} message={message}/>)
            })}     
          </>) 
        })     
      }
      <div ref={bottomRef}></div>
    </div>
  )
}

export default ChatBody