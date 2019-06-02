import { gold, green, red } from '@ant-design/colors'
import { useState } from 'react'

const DATE_MAP = {
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

const MONTH_MAP = {
  8: 1394
}

export const useDateMap = () => {
  const [dateMap, setDateMap] = useState(DATE_MAP)
  const [monthMap] = useState(MONTH_MAP)

  const getDateData = date => dateMap[date && date.date()] || []
  const getMonthData = date => monthMap[date && date.month()]
  const deleteDateData = (date, index) => {
    const dateKey = date.date()
    setDateMap({
      ...dateMap,
      [dateKey]: [...dateMap[dateKey].filter((_, i) => i !== index)]
    })
  }
  const updateDateData = (date, index, data) => {
    const dateKey = date.date()
    setDateMap({
      ...dateMap,
      [dateKey]: [
        ...dateMap[dateKey].map((value, i) =>
          i !== index ? value : { ...value, ...data }
        )
      ]
    })
  }
  const createDateData = (date, data) => {
    const dateKey = date.date()
    console.log(dateMap[dateKey])
    setDateMap({
      ...dateMap,
      [dateKey]: [...(dateMap[dateKey] || []), { status: 'warning', ...data }]
    })
  }

  return {
    getDateData,
    getMonthData,
    createDateData,
    deleteDateData,
    updateDateData
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
