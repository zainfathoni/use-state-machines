import { Calendar, Badge } from 'antd'
import React, { useState } from 'react'
import './ReservationCalendar.css'
import { ReservationModal } from './ReservationModal'
import { getDateData, getMonthData } from './utils'

const dateCellRender = value => (
  <ul className="events">
    {getDateData(value).map(item => (
      <li key={item.content}>
        <Badge status={item.type} text={item.content} />
      </li>
    ))}
  </ul>
)

const monthCellRender = value => {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Pickups Completed</span>
    </div>
  ) : null
}

export const ReservationCalendar = () => {
  const [date, setDate] = useState(null)
  return (
    <>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={date => setDate(date)} />
      <ReservationModal visible={!!date} onCancel={() => setDate(null)} onOk={() => setDate(null)} date={date} />
    </>
  )
}
