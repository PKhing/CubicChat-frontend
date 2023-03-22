import { User } from 'common/types/base'

export interface IUserContext {
  user: User | null
  refetch: () => Promise<void>
  reset: () => void
}
