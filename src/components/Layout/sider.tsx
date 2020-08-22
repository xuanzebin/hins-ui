import React from 'react'

import { scopedClassMaker } from '@components/helper'

import { SiderProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Sider: React.FC<SiderProps> = (props) => {
  const { children } = props
  return <div className={sc('sider')}>{children}</div>
}

export default Sider
