import { Modal } from 'antd'
import React, { useState } from 'react'
import { Icon } from './Icon'
import { ReservationCard } from './ReservationCard'
import { ReservationList } from './ReservationList'
import { getDateData } from './utils'

export const ReservationModal = ({ date, ...props }) => {
  const [index, setIndex] = useState(-1)
  const data = getDateData(date)
  // TODO: Render details directly if data.length === 1
  // FIXME: Avoid content flashing while closing the Modal
  return (
    <Modal
      afterClose={() => setIndex(-1)}
      centered
      title={
        <>
          {index >= 0 && (
            <>
              <Icon type="left-circle" onClick={() => setIndex(-1)} />
              &nbsp;&nbsp;
            </>
          )}
          {date && date.format('DD MMM YYYY')}
        </>
      }
      {...props}
    >
      {props.visible && index >= 0 ? (
        <ReservationCard rsvn={data[index]} />
      ) : (
        <ReservationList date={date} onActionClick={index => setIndex(index)} />
      )}
    </Modal>
  )
}
