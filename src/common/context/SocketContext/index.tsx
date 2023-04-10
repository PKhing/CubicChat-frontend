import {
  ClientToServerEvents,
  ServerToClientEvents,
} from 'common/types/dtos/socket.types'
import { API_BASE_URL } from 'common/utils/api/axiosInstance'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { io, Socket } from 'socket.io-client'

import { ISocketContext } from './type'

const SocketContext = createContext<ISocketContext>({} as ISocketContext)

export const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [socket, setSocket] = useState<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null)

  useEffect(() => {
    console.log('baseurl', API_BASE_URL + '/socket.io')
    const socket = io({ path: API_BASE_URL + '/socket.io' })

    setSocket(socket)

    // socket.on('connect', () => {
    // })

    return () => {
      socket.disconnect()
    }
  }, [])

  if (!socket) return null

  return (
    <SocketContext.Provider value={{ socket: socket! }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
