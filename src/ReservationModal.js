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
  onCreate,
  onDelete,
  onUpdate,
  ...props
}) => {
  const [index, setIndex] = useState(-1)
  const [editing, setEditing] = useState(false)

  // Render details directly if data.length === 1
  useEffect(() => {
    if (data.length === 0) {
      // FIXME: Create doesn't work intermittently
      // FIXME: Old editing state is not cleared properly
      setEditing(true)
    } else if (data.length === 1) {
      setIndex(0)
    }
  }, [data.length, index, editing])

  // FIXME: Avoid content flashing while closing the Modal
  const isDetailView = props.visible && index >= 0
  const handleDelete = () => onDelete(date, index)
  const handleCreate = data => onCreate(date, data)
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
              <DeleteButton key="delete" onClick={handleDelete} />,
              <EditButton key="edit" onClick={handleEdit} />
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
      ) : !isDetailView && editing && data.length === 0 ? (
        <ReservationDetailEdit onSubmit={handleCreate} />
      ) : (
        <ReservationList data={data} onActionClick={index => setIndex(index)} />
      )}
    </Modal>
  )
}
