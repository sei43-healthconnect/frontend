import React, { useContext, useEffect, useState } from 'react'
import styles from './ChatBody.module.css'
import ChatMessage from './ChatMessage'
import UserContext from "../context/user"
import { fetchData } from '../helpers/common'
import ChatTimeHeader from './ChatTimeHeader'

const ChatBody = () => {
  const userCtx = useContext(UserContext)
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const { ok, data } = await fetchData('/api/chats/id', "POST", {
      chat_id: userCtx.patient._id
    })

    if (ok) {
      setMessages(data)
    } else {
      console.log(data)
    }
  }

  useEffect(()=> {
    getMessages()
  },[])
  

  return (
    <div className={styles['main-container']}>
      <ChatTimeHeader />
      { messages.length > 0 &&
        // If messages exist, render all the messages
        messages.map((message)=> {
          return (
          <ChatMessage id={message._id} key={message._id} message={message}/>)
        })     
      }
    </div>
  )
}

export default ChatBody