import { Badge } from 'antd'
import React from 'react'
import { getDateData, getStatusText } from './utils'

export const ReservationList = ({ date }) => (
  <ul className="events">
    {date &&
      getDateData(date).map(({ status, time }) => (
        <li key={time}>
          <Badge status={status} text={`${time} ${getStatusText(status)}`} />
        </li>
      ))}
  </ul>
)
