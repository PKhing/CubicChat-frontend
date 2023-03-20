import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'

import ChatListTab from './components/ChatListTab'
import Profile from './components/Profile'
import { TabType } from './constants'
import { PageContainer } from './styled'

const Home = () => {
  const [currentTab, setTab] = React.useState<TabType>(TabType.USER)
  return (
    <PageContainer>
      <Profile />
      <Button label="Create Group Chat" icon={BsPlusSquare} />
      <TextField placeholder="Search" />
      <ChatListTab currentTab={currentTab} setTab={setTab} />
    </PageContainer>
  )
}

export default Home
