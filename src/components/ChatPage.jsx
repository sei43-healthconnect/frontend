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
        <div style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          height: 'calc(100vh - 264px)'
        }}>
          <ChatInput />
          <ChatBody /> 
        </div>
      </div> 
    </>
  )
}

export default ChatPage