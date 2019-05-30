import { Modal, Badge } from 'antd'
import React from 'react'
import { getDateData } from './utils'

export const ReservationModal = ({ date, ...props }) => {
  return (
    <Modal centered title={date && date.format('DD MMM YYYY')} {...props}>
      <ul className="events">
        {date &&
          getDateData(date).map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
      </ul>
    </Modal>
  )
}
