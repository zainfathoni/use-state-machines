import React from 'react'
import { Icon as AntIcon } from 'antd'
import { getStatusIcon, getStatusColor } from './utils'

export const Icon = props => (
  <AntIcon theme="twoTone" style={{ fontSize: 20 }} {...props} />
)

export const StatusIcon = ({ status }) => (
  <Icon type={getStatusIcon(status)} twoToneColor={getStatusColor(status)} />
)
