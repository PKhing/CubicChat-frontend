import React, { useCallback, useEffect, useState } from 'react'

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [query, setQuery] = useState<string>('')

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
  }, [searchQuery])

  return { query, searchQuery, handleQueryChange }
}

export default useSearch
