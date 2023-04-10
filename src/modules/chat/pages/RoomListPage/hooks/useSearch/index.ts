import { useRoomList } from 'common/context/RoomListContext'
import React, { useCallback, useEffect, useState } from 'react'

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { setQuery } = useRoomList()

  const handleQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
    },
    [],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchQuery)
    }, 500)
    return () => clearTimeout(timer)
  }, [searchQuery, setQuery])

  return { searchQuery, handleQueryChange }
}

export default useSearch
