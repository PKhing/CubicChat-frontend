import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import useResponsive from 'common/hooks/useResponsive'
import ChatListItem from 'modules/chat/components/ChatListItem'
import ChatListTab from 'modules/chat/components/ChatListTab'
import Profile from 'modules/profile/components/Profile'
import React from 'react'
import { BsPlusSquare, BsSearch } from 'react-icons/bs'

import useChatList from './hooks/useChatList'
import useSearch from './hooks/useSearch'
import { ChatListContainer, PageContainer, TextFieldContainer } from './styled'

const ChatListPage = () => {
  const { isMobile } = useResponsive()
  const { handleQueryChange, searchQuery, query } = useSearch()
  const { currentTab, setTab, chatListItems, handleClick } = useChatList(query)

  return (
    <PageContainer>
      <Profile />
      <Button label="Create Group Chat" icon={BsPlusSquare} />
      <TextFieldContainer>
        <BsSearch size={isMobile ? 20 : 24} />
        <TextField
          placeholder="Search"
          onChange={handleQueryChange}
          value={searchQuery}
        />
      </TextFieldContainer>
      <ChatListTab currentTab={currentTab} setTab={setTab} />
      <ChatListContainer>
        {chatListItems.map((chatListItem) => (
          <ChatListItem
            key={chatListItem.id}
            chatRoom={chatListItem}
            onClick={handleClick}
            currentTab={currentTab}
          />
        ))}
      </ChatListContainer>
    </PageContainer>
  )
}

export default ChatListPage
