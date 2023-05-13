import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'

const ChatPage = () => {
  return (
    <>  
      <div style={{ 
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
      }}>
        <ChatHeader /> 
        <ChatBody /> 
        <ChatInput />
      </div> 
    </>
  )
}

export default ChatPage