import { List } from 'antd'
import React from 'react'
import { Icon, StatusIcon } from './Icon'
import { getStatusText } from './utils'

export const ReservationList = ({ data, onActionClick }) => (
  <List
    dataSource={data}
    renderItem={({ status, time }, index) => (
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
