import { ClientToServerEvents, ServerToClientEvents } from 'common/types/socket'
import { Socket } from 'socket.io-client'

export interface ISocketContext {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
}
