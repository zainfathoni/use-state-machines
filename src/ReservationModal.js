import { Modal } from 'antd'
import React, { useState, useEffect } from 'react'
import { DeleteButton, EditButton } from './Button'
import { LeftIcon } from './Icon'
import { ReservationDetailEdit } from './ReservationDetailEdit'
import { ReservationDetailView } from './ReservationDetailView'
import { ReservationList } from './ReservationList'

export const ReservationModal = ({
  data,
  date,
  onDelete,
  onUpdate,
  ...props
}) => {
  const [index, setIndex] = useState(-1)
  const [editing, setEditing] = useState(false)

  // Render details directly if data.length === 1
  useEffect(() => {
    if (data.length === 1) {
      setIndex(0)
    }
  }, [data.length])

  // FIXME: Avoid content flashing while closing the Modal
  const isDetailView = props.visible && index >= 0
  const handleDelete = () => onDelete(date, index)
  const handleUpdate = data => onUpdate(date, index, data)
  const handleEdit = () => setEditing(true)
  const handleBack = () => {
    setEditing(false)
    setIndex(-1)
  }

  return (
    <Modal
      afterClose={() => {
        setEditing(false)
        setIndex(-1)
      }}
      centered
      footer={
        isDetailView && !editing && data[index].status === 'warning'
          ? [
              <DeleteButton onClick={handleDelete} />,
              <EditButton onClick={handleEdit} />
            ]
          : null
      }
      title={
        <>
          {isDetailView && <LeftIcon onClick={handleBack} />}
          {date && date.format('DD MMM YYYY')}
        </>
      }
      {...props}
    >
      {isDetailView && !editing ? (
        <ReservationDetailView item={data[index]} />
      ) : isDetailView && editing ? (
        <ReservationDetailEdit item={data[index]} onSubmit={handleUpdate} />
      ) : (
        <ReservationList data={data} onActionClick={index => setIndex(index)} />
      )}
    </Modal>
  )
}
