import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import ChatProvider from '../ChatContext'
import RoomListProvider from '../RoomListContext'
import { useSocket } from '../SocketContext'
import { IRoomContext } from './type'

const RoomContext = createContext<IRoomContext>({} as IRoomContext)

export const useRoom = () => useContext(RoomContext)

const RoomProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [roomId, setRoomId] = useState<string | null>(null)
  const { socket } = useSocket()

  const closeRoom = useCallback(() => {
    socket.emit('leave', roomId!)
    setRoomId(null)
  }, [roomId, socket])

  const openRoom = useCallback(
    (newRoomId: string) => {
      if (roomId) closeRoom()
      setRoomId(newRoomId)
      socket.emit('join', newRoomId)
    },
    [roomId, closeRoom, socket],
  )

  const value = useMemo(
    () => ({
      openRoom,
      closeRoom,
      isRoomOpen: !!roomId,
      roomId,
    }),
    [openRoom, closeRoom, roomId],
  )

  return (
    <RoomContext.Provider value={value}>
      <RoomListProvider>
        <ChatProvider>{children}</ChatProvider>
      </RoomListProvider>
    </RoomContext.Provider>
  )
}

export default RoomProvider
