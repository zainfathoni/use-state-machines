import { Modal, Button } from 'antd'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { ReservationDetailView } from './ReservationDetailView'
import { ReservationList } from './ReservationList'
import { ReservationDetailEdit } from './ReservationDetailEdit'

export const ReservationModal = ({
  date,
  data,
  onDelete,
  onUpdate,
  ...props
}) => {
  const [index, setIndex] = useState(-1)
  const [editing, setEditing] = useState(false)
  // TODO: Render details directly if data.length === 1
  // FIXME: Avoid content flashing while closing the Modal
  const isDetailView = props.visible && index >= 0
  const handleDelete = () => onDelete(date, index)
  const handleUpdate = data => onUpdate(date, index, data)
  const handleEdit = () => {
    setEditing(true)
  }

  return (
    <Modal
      afterClose={() => {
        setEditing(false)
        setIndex(-1)
      }}
      centered
      title={
        <>
          {isDetailView && (
            <>
              <Icon
                type="left-circle"
                onClick={() => {
                  setEditing(false)
                  setIndex(-1)
                }}
              />
              &nbsp;&nbsp;
            </>
          )}
          {date && date.format('DD MMM YYYY')}
        </>
      }
      footer={
        isDetailView && !editing && data[index].status === 'warning'
          ? [
              <Button key="back" onClick={handleDelete}>
                Delete
              </Button>,
              <Button key="submit" type="primary" onClick={handleEdit}>
                Edit
              </Button>
            ]
          : null
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
