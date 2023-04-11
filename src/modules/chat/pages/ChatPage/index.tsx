import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useRoom } from 'common/context/RoomContext'
import useResponsive from 'common/hooks/useResponsive'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

import ChatBox from '../../components/ChatBox'
import ChatInput from '../../components/ChatInput'
import useRoomName from './hooks/useRoomName'
import { PageContainer, TitleContainer } from './styled'

const ChatPage = () => {
  const { isMobile } = useResponsive()
  const { closeRoom } = useRoom()
  const { roomName } = useRoomName()

  return (
    <PageContainer>
      <TitleContainer>
        {isMobile && (
          <Button variant="text" icon={BsChevronLeft} onClick={closeRoom} />
        )}
        <Typography variant="h3">{roomName}</Typography>
      </TitleContainer>
      <ChatBox />
      <ChatInput />
    </PageContainer>
  )
}

export default ChatPage
