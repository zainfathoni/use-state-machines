import { Modal, Button } from 'antd'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { ReservationCard } from './ReservationCard'
import { ReservationList } from './ReservationList'
import { getDateData } from './utils'

export const ReservationModal = ({ date, onOk, onDelete, ...props }) => {
  const [index, setIndex] = useState(-1)
  const data = getDateData(date)
  // TODO: Render details directly if data.length === 1
  // FIXME: Avoid content flashing while closing the Modal
  const isDetailView = props.visible && index >= 0
  const handleDelete = () => {
    onDelete(date, index)
  }
  const handleEdit = () => {
    // TODO: Render Edit View
    onOk()
  }
  return (
    <Modal
      afterClose={() => setIndex(-1)}
      centered
      title={
        <>
          {isDetailView && (
            <>
              <Icon type="left-circle" onClick={() => setIndex(-1)} />
              &nbsp;&nbsp;
            </>
          )}
          {date && date.format('DD MMM YYYY')}
        </>
      }
      footer={
        isDetailView
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
      {isDetailView ? (
        <ReservationCard item={data[index]} />
      ) : (
        <ReservationList date={date} onActionClick={index => setIndex(index)} />
      )}
    </Modal>
  )
}
