import { gold, green, red } from '@ant-design/colors'
import { Badge, message } from 'antd'
import React, { useState } from 'react'
import moment from 'moment'
import './ReservationCalendar.css'

export const DATE_MAP = {
  3: [
    { status: 'success', time: '09:00', volume: '<3' },
    { status: 'error', time: '12:00', volume: '<3' }
  ],
  8: [
    { status: 'success', time: '09:00', volume: '<3' },
    { status: 'error', time: '12:00', volume: '<3' }
  ],
  10: [
    { status: 'success', time: '09:00', volume: '<3' },
    { status: 'success', time: '12:00', volume: '3-10' },
    { status: 'error', time: '15:00', volume: '11-50' }
  ],
  13: [{ status: 'success', time: '15:00', volume: '>50' }],
  15: [
    { status: 'error', time: '09:00', volume: '<3' },
    { status: 'success', time: '12:00', volume: '3-10' },
    { status: 'warning', time: '15:00', volume: '11-50' },
    { status: 'warning', time: '18:00', volume: '>50' }
  ],
  17: [
    { status: 'warning', time: '12:00', volume: '<3' },
    { status: 'warning', time: '15:00', volume: '11-50' },
    { status: 'warning', time: '18:00', volume: '>50' }
  ]
}

export const useDateMap = (MAP = DATE_MAP) => {
  const [dateMap, setDateMap] = useState(MAP)
  const [momentDate, setMomentDate] = useState(null)

  const date = momentDate && momentDate.date()
  const getData = date => dateMap[date] || []

  return {
    data: getData(date),
    date,
    disabledDate: date =>
      moment(date).isBefore(moment().add(-1, 'days')) &&
      !getData(date.date()).length,
    formattedDate: momentDate && momentDate.format('DD MMM YYYY'),
    getData,
    setMomentDate,
    onCancel: () => setMomentDate(null),
    onCreate: (date, data) => {
      setDateMap({
        ...dateMap,
        [date]: [...(dateMap[date] || []), { status: 'warning', ...data }]
      })
      message.success('Successfully Created!')
      setMomentDate(null)
    },
    onDelete: (date, index) => {
      setDateMap({
        ...dateMap,
        [date]: [...dateMap[date].filter((_, i) => i !== index)]
      })
      message.success('Successfully Deleted!')
      setMomentDate(null)
    },
    onUpdate: (date, index, data) => {
      setDateMap({
        ...dateMap,
        [date]: [
          ...dateMap[date].map((value, i) =>
            i !== index ? value : { ...value, ...data }
          )
        ]
      })
      message.success('Successfully Updated!')
      setMomentDate(null)
    },
    renderDate: mDate => mDate && dataCellRender(getData(mDate.date()))
  }
}

const STATUS_MAP = {
  error: 'Pickup Failed',
  success: 'Pickup Successful',
  warning: 'Upcoming Pickup'
}
export const getStatusText = status => STATUS_MAP[status]

const COLOR_MAP = {
  error: red[5],
  success: green[5],
  warning: gold[5]
}
export const getStatusColor = status => COLOR_MAP[status]

const ICON_MAP = {
  error: 'close-circle',
  success: 'check-circle',
  warning: 'clock-circle'
}
export const getStatusIcon = status => ICON_MAP[status]

export const dataCellRender = data => (
  <ul className="events">
    {data.map(({ status, time }) => (
      <li key={time}>
        <Badge status={status} text={`${time} ${getStatusText(status)}`} />
      </li>
    ))}
  </ul>
)
