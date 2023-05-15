import React from 'react'
import styles from './ChatTimeHeader.module.css'

const ChatTimeHeader = (props) => {
  return (
    <div className={styles['time-header']}>{props.time} 3 May 2023</div>
  )
}

export default ChatTimeHeader