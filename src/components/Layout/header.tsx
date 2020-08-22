import React from 'react'

import { scopedClassMaker } from '@components/helper'

import { HeaderProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props
  return <div className={sc('header')}>{children}</div>
}

export default Header
