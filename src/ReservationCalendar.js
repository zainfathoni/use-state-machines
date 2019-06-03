import { Calendar } from 'antd'
import React, { useState } from 'react'
import { ReservationModal } from './ReservationModal'
import { dataCellRender, useDateMap } from './utils'

export const ReservationCalendar = () => {
  const [date, setDate] = useState(null)
  const clearDate = () => setDate(null)
  const { createData, deleteData, getData, updateData } = useDateMap(clearDate)

  return (
    <main className="container">
      <Calendar
        dateCellRender={date => date && dataCellRender(getData(date))}
        onSelect={date => setDate(date)}
      />
      <ReservationModal
        data={getData(date)}
        date={date}
        onCancel={clearDate}
        onCreate={createData}
        onDelete={deleteData}
        onUpdate={updateData}
        visible={!!date}
      />
    </main>
  )
}
