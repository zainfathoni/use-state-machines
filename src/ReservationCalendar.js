import { Calendar } from 'antd'
import React, { useState } from 'react'
import { ReservationModal } from './ReservationModal'
import { dataCellRender, useDateMap } from './utils'

export const ReservationCalendar = () => {
  const [momentDate, setMomentDate] = useState(null)
  const clearDate = () => setMomentDate(null)
  const { createData, deleteData, getData, updateData } = useDateMap(clearDate)
  const date = momentDate && momentDate.date()
  const formattedDate = momentDate && momentDate.format('DD MMM YYYY')

  return (
    <main className="container">
      <Calendar
        dateCellRender={mDate => mDate && dataCellRender(getData(mDate.date()))}
        onSelect={mDate => setMomentDate(mDate)}
      />
      <ReservationModal
        data={getData(date)}
        date={date}
        formattedDate={formattedDate}
        onCancel={clearDate}
        onCreate={createData}
        onDelete={deleteData}
        onUpdate={updateData}
        visible={!!date}
      />
    </main>
  )
}
