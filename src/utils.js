import { gold, green, red } from '@ant-design/colors'

export const DATE_MAP = {
  8: [
    { status: 'success', time: '09:00', volume: '<3' },
    { status: 'error', time: '10:00', volume: '<3' }
  ],
  10: [
    { status: 'success', time: '09:00', volume: '<3' },
    { status: 'success', time: '10:00', volume: '3-10' },
    { status: 'error', time: '11:00', volume: '11-50' }
  ],
  13: [{ status: 'success', time: '10:00', volume: '>50' }],
  15: [
    { status: 'error', time: '07:00', volume: '<3' },
    { status: 'success', time: '09:00', volume: '3-10' },
    { status: 'warning', time: '13:00', volume: '11-50' },
    { status: 'warning', time: '14:00', volume: '11-50' },
    { status: 'warning', time: '15:00', volume: '>50' }
  ],
  17: [
    { status: 'warning', time: '12:00', volume: '<3' },
    { status: 'warning', time: '13:00', volume: '11-50' },
    { status: 'warning', time: '14:00', volume: '>50' }
  ]
}

export const MONTH_MAP = {
  8: 1394
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
