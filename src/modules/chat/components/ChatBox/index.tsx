import Typography from 'common/components/Typography'
import { useChat } from 'common/context/ChatContext'
import { isAtBottomOfDiv, isAtTopOfDiv } from 'common/context/ChatContext/utils'
import React, { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'

import ChatItem from '../ChatItem'
import { ChatBoxContainer, NewMessage } from './styled'

const ChatBox = () => {
  const { chatItems, chatBoxRef, newMessageNoti, scrollToBottom, fetchMore } =
    useChat()
  const [showNoti, setShowNoti] = React.useState(false)

  useEffect(() => {
    if (newMessageNoti === 0) return
    setShowNoti(true)
  }, [newMessageNoti])

  const handleScroll = () => {
    if (isAtBottomOfDiv(chatBoxRef)) {
      setShowNoti(false)
    }
    if (isAtTopOfDiv(chatBoxRef)) {
      fetchMore()
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
