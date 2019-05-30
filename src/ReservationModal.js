import { Modal, Icon } from 'antd'
import React, { useState } from 'react'
import { ReservationList } from './ReservationList'
import { ReservationCard } from './ReservationCard'
import { getDateData } from './utils'

export const ReservationModal = ({ date, ...props }) => {
  const [index, setIndex] = useState(-1)
  const data = getDateData(date)
  return (
    <Modal
      centered
      title={
        <>
          {index >= 0 && (
            <>
              <Icon
                type="left-circle"
                theme="twoTone"
                style={{ fontSize: 20 }}
                onClick={() => setIndex(-1)}
              />
              &nbsp;&nbsp;
            </>
          )}
          {date && date.format('DD MMM YYYY')}
        </>
      }
      afterClose={() => setIndex(-1)}
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
