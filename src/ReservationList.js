import { List } from 'antd'
import React from 'react'
import { Icon, StatusIcon } from './Icon'
import { getDateData, getStatusText } from './utils'

export const ReservationList = ({ date, onActionClick }) => (
  <List
    dataSource={getDateData(date)}
    renderItem={({ status, time, volume }, index) => (
      <List.Item
        actions={[
          <Icon type="right-circle" onClick={() => onActionClick(index)} />
        ]}
      >
        <List.Item.Meta
          avatar={<StatusIcon status={status} />}
          title={getStatusText(status)}
          description={time}
        />
      </List.Item>
    )}
    size="large"
  />
)
