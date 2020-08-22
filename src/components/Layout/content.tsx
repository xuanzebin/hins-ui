import React from 'react'
import classnames from 'classnames'

import { scopedClassMaker } from '@components/helper'

import { ContentProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Content: React.FC<ContentProps> = (props) => {
  const { children, className, ...resetProps } = props

  return (
    <div className={classnames(sc('content'), className)} {...resetProps}>
      {children}
    </div>
  )
}

export default Content
