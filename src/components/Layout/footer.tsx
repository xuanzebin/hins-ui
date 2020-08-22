import React from 'react'

import { scopedClassMaker } from '@components/helper'

import { FooterProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props
  return <div className={sc('footer')}>{children}</div>
}

export default Footer
