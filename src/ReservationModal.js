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
  onEdit,
  onView,
  stateValue,
  ...props
}) => {
  console.log(stateValue)

  return (
    <Modal
      centered
      footer={
        stateValue === 'view'
          ? [
              <DeleteButton key="delete" onClick={onDelete} />,
              <EditButton key="edit" onClick={onEdit} />
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
      visible={!!stateValue}
      {...props}
    >
      {stateValue === 'viewSingl' ? (
        <ReservationDetailView item={data[0]} />
      ) : stateValue === 'view' ? (
        <ReservationDetailView item={data[index]} />
      ) : stateValue === 'edit' ? (
        <ReservationDetailEdit item={data[index]} onSubmit={onUpdate} />
      ) : stateValue === 'new' ? (
        <ReservationDetailEdit onSubmit={onCreate} />
      ) : stateValue === 'list' ? (
        <ReservationList data={data} onActionClick={onView} />
      ) : null}
    </Modal>
  )
}
