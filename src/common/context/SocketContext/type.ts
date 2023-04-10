import {
  ClientToServerEvents,
  ServerToClientEvents,
} from 'common/types/dtos/socket.types'
import { Socket } from 'socket.io-client'

export interface ISocketContext {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
}
