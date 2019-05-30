import { Modal } from 'antd'
import React from 'react'
import { ReservationList } from './ReservationList'

export const ReservationModal = ({ date, ...props }) => {
  return (
    <Modal centered title={date && date.format('DD MMM YYYY')} {...props}>
      <ReservationList date={date} />
    </Modal>
  )
}
