import Button from 'common/components/Button'
import InputModal from 'common/components/InputModal'
import React from 'react'

import useCreateGroup from './hooks/useCreateGroup'
import { CreateGroupModalProps } from './types'

const CreateGroupModal = ({ onClose }: CreateGroupModalProps) => {
  const { groupName, handleGroupNameChange, handleCreateGroup, errorMessage } =
    useCreateGroup(onClose)
  return (
    <InputModal
      title="Create Group Chat"
      onClose={onClose}
      value={groupName}
      onChange={handleGroupNameChange}
      textfieldLabel="Group Name"
      helperText={errorMessage}
      actions={
        <Button
          label="Create Group Chat"
          onClick={handleCreateGroup}
          fullWidth
        />
      }
    />
  )
}

export default CreateGroupModal
