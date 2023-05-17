import React, { useContext, useEffect, useState } from 'react'
import { fetchData } from '../helpers/common'
import UserContext from "../context/user"
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import { Button } from '@mui/material'

const ChatPage = () => {
  const [messages, setMessages] = useState({})
  const [isRead, setIsRead] = useState(true)
  const userCtx = useContext(UserContext)

  
  const getMessages = async () => {
    const { ok, data } = await fetchData('/api/chats/id', "POST", {
      chat_id: userCtx.patient._id['$oid']
    })

    if (ok) {
      var response = data
      response.map((message)=> {
        message.Date = new Date(message.msg_timeSent).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
        // if message unread and opposite role is the sender
        if (!message.msg_isRead && ((userCtx.role == 'staff' && !message.msg_fromNurse) || (userCtx.role == 'contact' && message.msg_fromNurse))) {
          setIsRead(false)
        }
      })
      
      var partitioned = response.reduce(function (r, a) {
        r[a.Date] = r[a.Date] || [];
        r[a.Date].push(a);
        return r;
      }, Object.create(null));

      setMessages(partitioned)
      console.log(partitioned)
    } else {
      console.log(data)
    }
  }

  useEffect(()=> {
    getMessages()
  },[])

  return (
    <>  
      <div style={{ 
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
      }}>
        <ChatHeader /> 
        <div style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          height: 'calc(100vh - 264px)'
        }}>
          <ChatInput getMessages={getMessages} isRead={isRead} />
          <ChatBody messages={messages} setIsRead={setIsRead} /> 
        </div>
      </div> 
    </>
  )
}

export default ChatPage