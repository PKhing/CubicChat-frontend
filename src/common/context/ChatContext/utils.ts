import { IChatItem } from 'common/types/base'
import { ChatMessageDto } from 'common/types/dtos/chat.types'
import uuid from 'react-uuid'

export const appendFront = (
  chatItems: IChatItem[],
  message: ChatMessageDto,
): IChatItem[] => {
  const { senderName, profileImage, senderId, ...newMessage } = message

  if (isAppendAble(chatItems, message, 'first')) {
    const newChatItems = [...chatItems]
    const firstChatItem = { ...chatItems[0] }
    firstChatItem.message = [newMessage, ...firstChatItem.message]
    newChatItems[0] = firstChatItem

    return newChatItems
  }

  return [
    {
      senderName,
      senderId,
      profileImage,
      message: [newMessage],
      id: uuid(),
    },
    ...chatItems,
  ]
}

export const appendBack = (
  chatItems: IChatItem[],
  message: ChatMessageDto,
): IChatItem[] => {
  const { senderName, profileImage, senderId, ...newMessage } = message

  if (isAppendAble(chatItems, message, 'last')) {
    const newChatItems = [...chatItems]
    const lastChatItem = { ...chatItems[newChatItems.length - 1] }
    lastChatItem.message = [...lastChatItem.message, newMessage]
    newChatItems[newChatItems.length - 1] = lastChatItem

    return newChatItems
  }

  return [
    ...chatItems,
    {
      senderName,
      senderId,
      profileImage,
      message: [newMessage],
      id: uuid(),
    },
  ]
}

export const isAppendAble = (
  chatItems: IChatItem[],
  message: ChatMessageDto,
  type: 'first' | 'last',
): boolean => {
  // first message
  if (chatItems.length === 0) return false

  // not same senderName
  const lastChatItem =
    type === 'last' ? chatItems[chatItems.length - 1] : chatItems[0]
  if (lastChatItem.senderName !== message.senderName) return false

  // more than 5 minutes
  const lastTimeStamp = new Date(
    type === 'last'
      ? lastChatItem.message[lastChatItem.message.length - 1].timestamp
      : lastChatItem.message[0].timestamp,
  ).getTime()
  const timeStamp = new Date(message.timestamp).getTime()

  if (Math.abs(timeStamp - lastTimeStamp) / 1000 / 60 > 5) return false

  return true
}

export const isAtBottomOfDiv = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return false

  const { scrollTop, scrollHeight, clientHeight } = ref.current

  return Math.abs(scrollHeight - clientHeight - scrollTop) <= 1
}

export const isAtTopOfDiv = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return false

  const { scrollTop } = ref.current

  return scrollTop === 0
}
