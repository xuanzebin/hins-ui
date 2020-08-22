import React from 'react'
import classnames from 'classnames'

import { scopedClassMaker } from '@components/helper'

import { SiderProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Sider: React.FC<SiderProps> = (props) => {
  const { children, className, ...resetProps } = props

  return (
    <div className={classnames(sc('sider'), className)} {...resetProps}>
      {children}
    </div>
  )
}

export default Sider
