import { useChat } from 'common/context/ChatContext'
import React, { useRef } from 'react'

import ChatItem from '../ChatItem'
import { ChatBoxContainer } from './styled'

const ChatBox = () => {
  const { chatItems, chatBoxRef } = useChat()
  // const chatBoxRef = useRef<HTMLDivElement>(null)
  // const [scrollHeight, setScrollHeight] = React.useState<number>(0)

  // React.useEffect(() => {
  //   const isAtBottom =
  //     chatBoxRef.current?.scrollTop ===
  //     scrollHeight - chatBoxRef.current!.clientHeight

  //   console.log(chatBoxRef.current?.scrollTop)
  //   console.log(chatBoxRef.current?.scrollHeight)

  //   if (isAtBottom)
  //     chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
  //   setScrollHeight(chatBoxRef.current!.scrollHeight)
  // }, [newMessageTrigger, scrollHeight])

  return (
    <ChatBoxContainer ref={chatBoxRef}>
      {chatItems.map((chatItem) => (
        <ChatItem key={chatItem.message[0].timestamp} {...chatItem} />
      ))}
    </ChatBoxContainer>
  )
}

export default ChatBox
