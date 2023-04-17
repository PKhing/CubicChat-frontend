import { IRoom, RoomListType } from 'common/types/base'
import { ChatRoomIdDto } from 'common/types/dtos/group.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import ChatProvider from '../ChatContext'
import { useRoom } from '../RoomContext'
import { useSocket } from '../SocketContext'
import { useUser } from '../UserContext'
import { IRoomListContext } from './type'
import { getRooms } from './utils'

const RoomListContext = createContext<IRoomListContext>({} as IRoomListContext)

export const useRoomList = () => useContext(RoomListContext)

const RoomListProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [rooms, setRooms] = useState<IRoom[]>([])
  const [query, setQuery] = useState<string>('')
  const { openRoom } = useRoom()
  const { user } = useUser()
  const { socket } = useSocket()

  // ============ Change tab ============
  const [type, setType] = useState<RoomListType>(RoomListType.RECENT)
  const handleTypeChange = useCallback(
    (newType: RoomListType) => {
      if (type !== newType) {
        setRooms([])
        setType(newType)
      }
    },
    [type],
  )

  // ============ Fetch when tab change ============
  const refetch = useCallback(async () => {
    setRooms(await getRooms(type, user!.userId))
  }, [type, user])

  useEffect(() => {
    refetch()
  }, [refetch])

  // ============ Listen on invite ============

  useEffect(() => {
    socket.on('invite', (roomId: string) => {
      socket.emit('addRoom', roomId)
    })

    return () => {
      socket.off('invite')
    }
  }, [socket])

  // ============ Listen on notify ============
  const getRoomDetail = useCallback(async (roomId: string) => {
    const res = await apiClient.get<IRoom>(`/groups/${roomId}/info`)
    return res.data
  }, [])

  useEffect(() => {
    if (type !== RoomListType.RECENT) return

    socket.on('notify', async (roomId: string) => {
      const idx = rooms.findIndex((item) => item.id === roomId)

      if (idx === -1) {
        const room = await getRoomDetail(roomId)
        setRooms([room, ...rooms])
        return
      }

      const newChatListItems = [...rooms]
      newChatListItems.splice(idx, 1)
      setRooms([rooms[idx], ...newChatListItems])
    })

    return () => {
      socket.off('notify')
    }
  }, [getRoomDetail, rooms, socket, type])

  // ============ Handlers ============

  const handleJoinGroup = useCallback(
    async (roomId: string) => {
      await apiClient.put(`/groups/${roomId}/join`)
      socket.emit('addRoom', roomId)

      openRoom(roomId)
    },
    [openRoom, socket],
  )

  const handleStartDm = useCallback(
    async (userId: string) => {
      const res = await apiClient.get<ChatRoomIdDto>(`/users/${userId}/chat`)
      const roomId = res.data.chatRoomId
      openRoom(roomId)

      socket.emit('addRoom', roomId, userId)
    },
    [openRoom, socket],
  )

  const handlers = useMemo(
    () => ({
      [RoomListType.GROUP]: handleJoinGroup,
      [RoomListType.USER]: handleStartDm,
      [RoomListType.RECENT]: openRoom,
    }),
    [handleJoinGroup, handleStartDm, openRoom],
  )

  const filteredRooms = useMemo(
    () =>
      rooms.filter((room) =>
        room.name.toLowerCase().includes(query.toLocaleLowerCase()),
      ),
    [query, rooms],
  )

  const value = useMemo(
    () => ({
      type,
      handleTypeChange,
      rooms: filteredRooms,
      handleClick: handlers[type],
      setQuery,
      refetch,
    }),
    [handleTypeChange, handlers, filteredRooms, type, setQuery, refetch],
  )

  return (
    <RoomListContext.Provider value={value}>
      <ChatProvider>{children}</ChatProvider>
    </RoomListContext.Provider>
  )
}

export default RoomListProvider
