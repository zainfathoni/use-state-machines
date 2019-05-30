import { Modal, Badge } from 'antd'
import React from 'react'

export const ReservationModal = ({ date, listData, ...props }) => {
  return (
    <Modal centered title={date && date.format('DD MMM YYYY')} {...props}>
      {listData &&
        listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
    </Modal>
  )
}
