import { Modal } from 'antd'
import React from 'react'
import { DeleteButton, EditButton } from './Button'
import { LeftIcon } from './Icon'
import { ReservationDetailEdit } from './ReservationDetailEdit'
import { ReservationDetailView } from './ReservationDetailView'
import { ReservationList } from './ReservationList'

export const ReservationModal = ({
  data,
  date,
  formattedDate,
  index,
  onBack,
  onCreate,
  onDelete,
  onUpdate,
  send,
  stateValue,
  ...props
}) => {
  const handleDelete = () => onDelete(date, index)
  const handleCreate = data => onCreate(date, data)
  const handleUpdate = data => onUpdate(date, index, data)
  const handleEdit = () => send('EDIT')

  return (
    <Modal
      centered
      footer={
        stateValue === 'view'
          ? [
              <DeleteButton key="delete" onClick={handleDelete} />,
              <EditButton key="edit" onClick={handleEdit} />
            ]
          : null
      }
      title={
        <>
          {['view', 'edit'].includes(stateValue) && (
            <LeftIcon onClick={onBack} />
          )}
          {formattedDate}
        </>
      }
      visible={stateValue}
      {...props}
    >
      {stateValue === 'view' ? (
        <ReservationDetailView item={data[index]} />
      ) : stateValue === 'edit' ? (
        <ReservationDetailEdit item={data[index]} onSubmit={handleUpdate} />
      ) : stateValue === 'new' ? (
        <ReservationDetailEdit onSubmit={handleCreate} />
      ) : stateValue === 'list' ? (
        <ReservationList
          data={data}
          onActionClick={index => send('VIEW', index)}
        />
      ) : null}
    </Modal>
  )
}
