import { Badge, Calendar, message } from 'antd'
import React, { useState } from 'react'
import './ReservationCalendar.css'
import { ReservationModal } from './ReservationModal'
import { getStatusText, useDateMap } from './utils'

export const ReservationCalendar = () => {
  const [date, setDate] = useState(null)
  const {
    getDateData,
    getMonthData,
    deleteDateData,
    updateDateData
  } = useDateMap()

  const dateCellRender = date => (
    <ul className="events">
      {date &&
        getDateData(date).map(({ status, time }) => (
          <li key={time}>
            <Badge status={status} text={`${time} ${getStatusText(status)}`} />
          </li>
        ))}
    </ul>
  )

  const monthCellRender = date => {
    const num = getMonthData(date)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Pickups Completed</span>
      </div>
    ) : null
  }

  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={date => setDate(date)}
      />
      <ReservationModal
        visible={!!date}
        onCancel={() => setDate(null)}
        onDelete={(date, index) => {
          deleteDateData(date, index)
          message.success('Successfully Deleted!')
          setDate(null)
        }}
        onUpdate={(date, index, data) => {
          updateDateData(date, index, data)
          message.success('Successfully Updated!')
          setDate(null)
        }}
        date={date}
        data={getDateData(date)}
      />
    </>
  )
}
