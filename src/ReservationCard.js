import { gold, green, red } from '@ant-design/colors'
import { Card } from 'antd'
import React from 'react'
import { Icon } from './Icon'
import { getStatusText } from './utils'

const COLOR_MAP = {
  error: red[5],
  success: green[5],
  warning: gold[5]
}

const ICON_MAP = {
  error: 'close-circle',
  success: 'check-circle',
  warning: 'clock-circle'
}

export const ReservationCard = ({ rsvn }) => {
  const { status } = rsvn
  return (
    <Card
      bordered={false}
      title={
        <>
          <Icon type={ICON_MAP[status]} twoToneColor={COLOR_MAP[status]} />
          &nbsp;&nbsp;
          {getStatusText(status)}
        </>
      }
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}
