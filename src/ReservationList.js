import { Badge } from 'antd'
import React from 'react'
import { getDateData } from './utils'

export const ReservationList = ({ date }) => (
  <ul className="events">
    {date &&
      getDateData(date).map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
  </ul>
)
