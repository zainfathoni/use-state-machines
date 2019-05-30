const DATE_MAP = {
  8: [{ type: 'warning', content: 'This is warning event.' }, { type: 'success', content: 'This is usual event.' }],
  10: [
    { type: 'warning', content: 'This is warning event.' },
    { type: 'success', content: 'This is usual event.' },
    { type: 'error', content: 'This is error event.' }
  ],
  15: [
    { type: 'warning', content: 'This is warning event' },
    { type: 'success', content: 'This is very long usual event。。....' },
    { type: 'error', content: 'This is error event 1.' },
    { type: 'error', content: 'This is error event 2.' },
    { type: 'error', content: 'This is error event 3.' },
    { type: 'error', content: 'This is error event 4.' }
  ]
}

export const getDateData = value => DATE_MAP[value.date()] || []

const MONTH_MAP = {
  8: 1394
}

export const getMonthData = value => MONTH_MAP[value.month()]
