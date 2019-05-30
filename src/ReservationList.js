import { Badge, List, Icon } from 'antd'
import React from 'react'
import { getDateData, getStatusText } from './utils'

export const ReservationList = ({ date, onActionClick }) => (
  <List
    size="large"
    dataSource={getDateData(date)}
    renderItem={({ status, time }, index) => (
      <List.Item
        actions={[
          <Icon type="right-circle" theme="twoTone" style={{ fontSize: 20 }} onClick={() => onActionClick(index)} />
        ]}
      >
        <List.Item.Meta avatar={<Badge status={status} />} title={getStatusText(status)} description={time} />
      </List.Item>
    )}
  />
)
