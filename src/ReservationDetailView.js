import { Descriptions } from 'antd'
import React from 'react'
import { StatusIcon } from './Icon'
import { getStatusText } from './utils'

export const ReservationDetailView = ({ item: { status, time, volume } }) => (
  <Descriptions
    title={
      <>
        <StatusIcon status={status} />
        &nbsp;&nbsp;
        {getStatusText(status)}
      </>
    }
  >
    <Descriptions.Item label="Time">{time}</Descriptions.Item>
    <Descriptions.Item label="Volume">{volume} parcels</Descriptions.Item>
  </Descriptions>
)
