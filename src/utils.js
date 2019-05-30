const DATE_MAP = {
  8: [{ status: 'success', time: '09:00' }, { status: 'error', time: '10:00' }],
  10: [
    { status: 'success', time: '09:00' },
    { status: 'success', time: '10:00' },
    { status: 'error', time: '11:00' }
  ],
  13: [{ status: 'success', time: '10:00' }],
  15: [
    { status: 'error', time: '07:00' },
    { status: 'success', time: '09:00' },
    { status: 'warning', time: '13:00' },
    { status: 'warning', time: '14:00' },
    { status: 'warning', time: '15:00' }
  ],
  17: [
    { status: 'warning', time: '12:00' },
    { status: 'warning', time: '13:00' },
    { status: 'warning', time: '14:00' }
  ]
}
export const getDateData = date => DATE_MAP[date && date.date()] || []

const MONTH_MAP = {
  8: 1394
}
export const getMonthData = date => MONTH_MAP[date && date.month()]

const STATUS_MAP = {
  error: 'Pickup Failed',
  success: 'Pickup Successful',
  warning: 'Upcoming Pickup'
}
export const getStatusText = status => STATUS_MAP[status]
