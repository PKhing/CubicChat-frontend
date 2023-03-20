import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import useResponsive from 'common/hooks/useResponsive'
import Chat from 'modules/chat'
import React from 'react'
import { BsPlusSquare, BsSearch } from 'react-icons/bs'

import ChatListItem from './components/ChatListItem'
import ChatListTab from './components/ChatListTab'
import Profile from './components/Profile'
import { TabType } from './constants'
import { ChatListContainer, PageContainer, TextFieldContainer } from './styled'

const Home = () => {
  const { isMobile } = useResponsive()

  const [currentTab, setTab] = React.useState<TabType>(TabType.USER)

  return <Chat />
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
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatListContainer>
    </PageContainer>
  )
}

export default Home
