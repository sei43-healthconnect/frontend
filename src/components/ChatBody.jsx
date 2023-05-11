import React, { useState } from 'react'
import styles from './ChatBody.module.css'
import ChatMessage from './ChatMessage'

const ChatBody = () => {
  const [messages, setMessages] = useState({})

  return (
    <div className={styles['main-container']}>
      { messages.length > 0 &&
        // If messages exist, render all the messages
        messages.map((message)=> {
          <ChatMessage message={message}/>
        })     
      }
    </div>
  )
}

export default ChatBody