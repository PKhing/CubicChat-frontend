import { media } from 'config/theme/media'
import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: media.md })

  return { isMobile }
}

export default useResponsive
