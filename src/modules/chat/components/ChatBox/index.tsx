import Typography from 'common/components/Typography'
import { useChat } from 'common/context/ChatContext'
import { isAtBottomOfDiv } from 'common/context/ChatContext/utils'
import React, { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import ChatItem from '../ChatItem'
import { ChatBoxContainer, NewMessage } from './styled'

const ChatBox = () => {
  const { chatItems, chatBoxRef, newMessageNoti, scrollToBottom } = useChat()
  const [showNoti, setShowNoti] = React.useState(false)

  useEffect(() => {
    if (newMessageNoti === 0) return
    setShowNoti(true)
  }, [newMessageNoti])

  const handleScroll = () => {
    if (isAtBottomOfDiv(chatBoxRef)) {
      setShowNoti(false)
    }
  }

  const handleNewMessageClick = () => {
    scrollToBottom()
    setShowNoti(false)
  }

  return (
    <>
      <ChatBoxContainer ref={chatBoxRef} onScroll={handleScroll}>
        {showNoti && (
          <NewMessage onClick={handleNewMessageClick}>
            <Typography variant="body1" color="primary900">
              New Message
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <BsChevronDown />
          </NewMessage>
        )}
        {chatItems.map((chatItem) => (
          <ChatItem key={chatItem.message[0].timestamp} {...chatItem} />
        ))}
      </ChatBoxContainer>
    </>
  )
}

export default ChatBox
