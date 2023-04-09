export interface GetGroupDto {
  chatRoomId: string
  name: string
}

export interface GetGroupsDto {
  groups: GetGroupDto[]
}

export interface ChatRoomIdDto {
  chatRoomId: string
}

export interface JoinGroupDto {
  roomId: string
}
