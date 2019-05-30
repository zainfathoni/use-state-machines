import { Calendar } from 'antd'
import React, { useState } from 'react'
import './ReservationCalendar.css'
import { ReservationList } from './ReservationList'
import { ReservationModal } from './ReservationModal'
import { getMonthData } from './utils'

const dateCellRender = date => <ReservationList date={date} />

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
