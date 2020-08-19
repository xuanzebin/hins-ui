import React from 'react'

import { SiderProps } from './index.d'

const Sider: React.FC<SiderProps> = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export default Sider
