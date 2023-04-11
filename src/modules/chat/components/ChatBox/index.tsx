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
  const firstUpdate = React.useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
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
    <div
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      {showNoti && (
        <NewMessage onClick={handleNewMessageClick}>
          <Typography variant="body1" color="primary900">
            New Message
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <BsChevronDown />
        </NewMessage>
      )}
      <ChatBoxContainer ref={chatBoxRef} onScroll={handleScroll}>
        {chatItems.map((chatItem) => (
          <ChatItem key={chatItem.message[0].timestamp} {...chatItem} />
        ))}
      </ChatBoxContainer>
    </div>
  )
}

export default ChatBox
