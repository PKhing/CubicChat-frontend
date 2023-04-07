import { IChatItem } from 'common/types/base'
import { ChatMessageDto } from 'common/types/socket'

export const appendMessage = (
  chatItems: IChatItem[],
  message: ChatMessageDto,
): IChatItem[] => {
  const { senderName, profileImage, senderId, ...newMessage } = message

  if (isAppendAble(chatItems, message)) {
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
    },
  ]
}

export const isAppendAble = (
  chatItems: IChatItem[],
  message: ChatMessageDto,
): boolean => {
  // first message
  if (chatItems.length === 0) return false

  // not same senderName
  const lastChatItem = chatItems[chatItems.length - 1]
  if (lastChatItem.senderName !== message.senderName) return false

  // more than 5 minutes
  const lastTimeStamp = new Date(
    lastChatItem.message[lastChatItem.message.length - 1].timestamp,
  ).getTime()
  const timeStamp = new Date(message.timestamp).getTime()

  if (Math.abs(timeStamp - lastTimeStamp) / 1000 / 60 > 5) return false

  return true
}
