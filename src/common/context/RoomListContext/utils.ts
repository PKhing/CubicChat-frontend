import { IRoom, RoomListType } from 'common/types/base'
import { GetGroupsDto, GetRecentGroupsDto } from 'common/types/dtos/group.types'
import { GetUsersDto } from 'common/types/dtos/user.types'
import { apiClient } from 'common/utils/api/axiosInstance'

export const getRooms = async (
  type: RoomListType,
  userId: string,
): Promise<IRoom[]> => {
  if (type === RoomListType.USER) {
    const res = await apiClient.get<GetUsersDto>('/users')
    const users = res.data.users.map(({ userId, username, profileImage }) => ({
      id: userId,
      name: username,
      imageUrl: profileImage,
    }))
    return users.filter(({ id }) => id != userId)
  } else if (type === RoomListType.GROUP) {
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
