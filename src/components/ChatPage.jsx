import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'

const ChatPage = () => {
  return (
    <>  
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>
        <ChatHeader /> 
        <ChatBody /> 
        <ChatInput />
      </div> 
    </>
  )
}

export default ChatPage