import React from 'react'
import classnames from 'classnames'

import { scopedClassMaker } from '@components/helper'

import { FooterProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Footer: React.FC<FooterProps> = (props) => {
  const { children, className, ...resetProps } = props

  return (
    <div className={classnames(sc('footer'), className)} {...resetProps}>
      {children}
    </div>
  )
}

export default Footer
