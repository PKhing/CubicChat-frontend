import Button from 'common/components/Button'
import { TabType } from 'modules/chat/pages/ChatListPage/constants'
import React from 'react'

import { ICON, LABEL, TABS } from './constants'
import { TabContainer } from './styled'
import { ChatListTabProps } from './types'

const ChatListTab = ({ currentTab, setTab }: ChatListTabProps) => {
  return (
    <TabContainer>
      {TABS.map((tab) => (
        <Button
          key={tab}
          label={LABEL[tab as TabType]}
          icon={ICON[tab as TabType]}
          onClick={() => setTab(tab as TabType)}
          css={{
            flexGrow: 1,
            backgroundColor: currentTab === tab ? '$primary800' : '$primary700',
          }}
        />
      ))}
    </TabContainer>
  )
}

export default ChatListTab
