import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import useResponsive from 'common/hooks/useResponsive'
import ChatListItem from 'modules/chat/components/ChatListItem'
import ChatListTab from 'modules/chat/components/ChatListTab'
import Profile from 'modules/profile/components/Profile'
import React from 'react'
import { BsPlusSquare, BsSearch } from 'react-icons/bs'

import useChatList from './hooks/useChatList'
import { ChatListContainer, PageContainer, TextFieldContainer } from './styled'

const ChatListPage = () => {
  const { isMobile } = useResponsive()
  const { currentTab, setTab, chatRooms } = useChatList()

  return (
    <PageContainer>
      <Profile />
      <Button label="Create Group Chat" icon={BsPlusSquare} />
      <TextFieldContainer>
        <BsSearch size={isMobile ? 20 : 24} />
        <TextField placeholder="Search" />
      </TextFieldContainer>
      <ChatListTab currentTab={currentTab} setTab={setTab} />
      <ChatListContainer>
        {chatRooms.map((chatRoom) => (
          <ChatListItem key={chatRoom.chatId} chatRoom={chatRoom} />
        ))}
      </ChatListContainer>
    </PageContainer>
  )
}

export default ChatListPage
