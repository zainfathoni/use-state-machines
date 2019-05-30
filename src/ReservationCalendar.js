import { Calendar, Badge } from 'antd'
import React, { useState } from 'react'
import './ReservationCalendar.css'
import { ReservationModal } from './ReservationModal'
import { getListData } from './utils'

const dateCellRender = value => (
  <ul className="events">
    {getListData(value).map(item => (
      <li key={item.content}>
        <Badge status={item.type} text={item.content} />
      </li>
    ))}
  </ul>
)

const getMonthData = value => {
  if (value.month() === 8) {
    return 1394
  }
}

const monthCellRender = value => {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export const ReservationCalendar = () => {
  const [date, setDate] = useState(null)
  return (
    <>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={date => setDate(date)} />
      <ReservationModal
        visible={!!date}
        onCancel={() => setDate(null)}
        onOk={() => setDate(null)}
        date={date}
        listData={date && getListData(date)}
      />
    </>
  )
}
