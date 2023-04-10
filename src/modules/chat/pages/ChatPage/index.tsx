import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useRoom } from 'common/context/RoomContext'
import useResponsive from 'common/hooks/useResponsive'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

import ChatBox from '../../components/ChatBox'
import ChatInput from '../../components/ChatInput'
import { PageContainer, TitleContainer } from './styled'

const ChatPage = () => {
  const { isMobile } = useResponsive()
  const { closeRoom } = useRoom()

  return (
    <PageContainer>
      <TitleContainer>
        {isMobile && (
          <Button variant="text" icon={BsChevronLeft} onClick={closeRoom} />
        )}
        <Typography variant="h3">Genshin Impact</Typography>
      </TitleContainer>
      <ChatBox />
      <ChatInput />
    </PageContainer>
  )
}

export default ChatPage
