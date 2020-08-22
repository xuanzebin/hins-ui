import React from 'react'
import classnames from 'classnames'

import { scopedClassMaker } from '@components/helper'

import { HeaderProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Header: React.FC<HeaderProps> = (props) => {
  const { children, className, ...resetProps } = props

  return (
    <div className={classnames(sc('header'), className)} {...resetProps}>
      {children}
    </div>
  )
}

export default Header
