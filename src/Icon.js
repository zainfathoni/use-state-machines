import { Icon as AntIcon } from 'antd'
import React from 'react'
import { getStatusColor, getStatusIcon } from './utils'

export const Icon = props => (
  <AntIcon style={{ fontSize: 20 }} theme="twoTone" {...props} />
)

export const LeftIcon = props => (
  <>
    <Icon type="left-circle" {...props} />
    &nbsp;&nbsp;
  </>
)

export const RightIcon = props => <Icon type="right-circle" {...props} />

export const StatusIcon = ({ status }) => (
  <Icon twoToneColor={getStatusColor(status)} type={getStatusIcon(status)} />
)
