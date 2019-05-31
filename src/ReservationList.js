import { Badge, List } from 'antd'
import React from 'react'
import { Icon } from './Icon'
import { getDateData, getStatusText } from './utils'

export const ReservationList = ({ date, onActionClick }) => (
  <List
    dataSource={getDateData(date)}
    renderItem={({ status, time }, index) => (
      <List.Item
        actions={[
          <Icon type="right-circle" onClick={() => onActionClick(index)} />
        ]}
      >
        <List.Item.Meta
          avatar={<Badge status={status} />}
          title={getStatusText(status)}
          description={time}
        />
      </List.Item>
    )}
    size="large"
  />
)
