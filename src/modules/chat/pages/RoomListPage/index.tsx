import Button from 'common/components/Button'
import TextField from 'common/components/TextField'
import { useRoomList } from 'common/context/RoomListContext'
import useResponsive from 'common/hooks/useResponsive'
import CreateGroupModal from 'modules/chat/components/CreateGroupModal'
import Room from 'modules/chat/components/Room'
import RoomListTab from 'modules/chat/components/RoomListTab'
import Profile from 'modules/profile/components/Profile'
import React from 'react'
import { BsPlusSquare, BsSearch } from 'react-icons/bs'

import useSearch from './hooks/useSearch'
import { PageContainer, RoomListContainer, TextFieldContainer } from './styled'

const RoomListPage = () => {
  const { isMobile } = useResponsive()
  const { handleQueryChange, searchQuery } = useSearch()
  const { type, handleTypeChange, rooms, handleClick } = useRoomList()
  const [isModalOpen, setModalOpen] = React.useState(false)

  return (
    <PageContainer>
      <Profile />
      <Button
        label="Create Group Chat"
        icon={BsPlusSquare}
        onClick={() => setModalOpen(true)}
      />
      <TextFieldContainer>
        <BsSearch size={isMobile ? 20 : 24} />
        <TextField
          placeholder="Search"
          onChange={handleQueryChange}
          value={searchQuery}
        />
      </TextFieldContainer>
      <RoomListTab type={type} setType={handleTypeChange} />
      <RoomListContainer>
        {rooms.map((room) => (
          <Room
            key={room.id}
            chatRoom={room}
            onClick={handleClick}
            currentTab={type}
          />
        ))}
      </RoomListContainer>

      {isModalOpen && <CreateGroupModal onClose={() => setModalOpen(false)} />}
    </PageContainer>
  )
}

export default RoomListPage
