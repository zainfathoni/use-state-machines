import React from 'react'
import { Card, Icon } from 'antd'
import { getStatusText } from './utils'
import { green, gold, red } from '@ant-design/colors'

const COLOR_MAP = {
  success: green[5],
  warning: gold[5],
  error: red[5]
}

const ICON_MAP = {
  success: 'check-circle',
  warning: 'clock-circle',
  error: 'close-circle'
}

export const ReservationCard = ({ rsvn }) => {
  const { status } = rsvn
  return (
    <Card
      title={
        <>
          <Icon
            type={ICON_MAP[status]}
            theme="twoTone"
            style={{ fontSize: 20 }}
            twoToneColor={COLOR_MAP[status]}
          />
          &nbsp;&nbsp;
          {getStatusText(status)}
        </>
      }
      bordered={false}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}
