import { GetGroupsDto, GetRecentGroupsDto } from 'common/types/dtos/group.types'
import { GetUsersDto } from 'common/types/dtos/user.types'
import { apiClient } from 'common/utils/api/axiosInstance'
import { IChatListItem } from 'modules/chat/components/ChatListItem/types'

import { TabType } from '../../constants'

export const getChatListItems = async (
  type: TabType,
  userId: string,
): Promise<IChatListItem[]> => {
  if (type === TabType.USER) {
    const res = await apiClient.get<GetUsersDto>('/users')
    const users = res.data.users.map(({ userId, username, profileImage }) => ({
      id: userId,
      name: username,
      imageUrl: profileImage,
    }))
    return users.filter(({ id }) => id != userId)
  } else if (type === TabType.GROUP) {
    const res = await apiClient.get<GetGroupsDto>('/groups')
    return res.data.groups.map(({ chatRoomId, name }) => ({
      id: chatRoomId,
      name,
    }))
  } else {
    const res = await apiClient.get<GetRecentGroupsDto>('/groups/recent')
    return res.data.groups.map(({ chatRoomId, name }) => ({
      id: chatRoomId,
      name,
    }))
  }
}
