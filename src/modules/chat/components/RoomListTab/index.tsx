import Button from 'common/components/Button'
import React from 'react'

import { ICON, LABEL, TABS } from './constants'
import { TabContainer } from './styled'
import { RoomListTabProps } from './types'

const RoomListTab = ({ type: currentType, setType }: RoomListTabProps) => {
  return (
    <TabContainer>
      {TABS.map((type) => (
        <Button
          key={type}
          label={LABEL[type]}
          icon={ICON[type]}
          onClick={() => setType(type)}
          css={{
            flexGrow: 1,
            backgroundColor:
              type === currentType ? '$primary800' : '$primary700',
          }}
        />
      ))}
    </TabContainer>
  )
}

export default RoomListTab
