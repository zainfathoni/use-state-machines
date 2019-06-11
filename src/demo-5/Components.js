import { Button as AntButton, List, Modal as AntModal } from 'antd'
import React from 'react'

export const Button = props => <AntButton size="large" {...props} />

export const PrimaryButton = props => <AntButton type="primary" {...props} />

export const Modal = ({
  onBack,
  onEdit,
  onView,
  onSubmit,
  stateValue,
  ...props
}) => (
  <AntModal
    centered
    footer={null}
    title={stateValue}
    visible={!!stateValue}
    {...props}
  >
    {stateValue === 'list' ? (
      <List>
        <List.Item>
          <AntButton onClick={onView}>Item 1</AntButton>
        </List.Item>
        <List.Item>
          <AntButton onClick={onView}>Item 2</AntButton>
        </List.Item>
        <List.Item>
          <AntButton onClick={onView}>Item 3</AntButton>
        </List.Item>
      </List>
    ) : stateValue === 'view' ? (
      <>
        <AntButton onClick={onBack}>Back</AntButton>&nbsp;
        <PrimaryButton onClick={onEdit}>Edit</PrimaryButton>
      </>
    ) : stateValue === 'edit' ? (
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
    ) : stateValue === 'create' ? (
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
    ) : null}
  </AntModal>
)
