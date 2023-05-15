import React, { useEffect, useState } from 'react'
import styles from './ChatBody.module.css'
import ChatMessage from './ChatMessage'
import { fetchData } from '../helpers/common'

const ChatBody = () => {
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    const { ok, data } = await fetchData('/api/chats')

    if (ok) {
      setMessages(data)
    } else {
      console.log(data)
    }
  }

  useEffect(()=> {
    getMessages
  },[])
  

  return (
    <div className={styles['main-container']}>
      <button onClick={getMessages}>a</button>
      <button onClick={()=> console.log(messages)}>b</button>
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