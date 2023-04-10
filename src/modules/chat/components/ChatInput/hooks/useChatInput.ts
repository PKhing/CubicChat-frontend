import { useRoom } from 'common/context/RoomContext'
import { useSocket } from 'common/context/SocketContext'
import { MessageType } from 'common/types/base'
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'

const useChatInput = () => {
  const [message, setMessage] = useState('')
  const { roomId } = useRoom()
  const { socket } = useSocket()

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setMessage((message) => (message === '' && value === '\n' ? '' : value))
  }

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault()
    if (message === '') return
    socket.emit('chatMessage', roomId!, MessageType.TEXT, message)
    setMessage('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit()
    }
  }

  return { message, handleChange, handleSubmit, handleKeyDown }
}

export default useChatInput
