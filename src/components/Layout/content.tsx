import React from 'react'

import { scopedClassMaker } from '@components/helper'

import { ContentProps } from './index.d'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

const Content: React.FC<ContentProps> = (props) => {
  const { children } = props
  return <div className={sc('content')}>{children}</div>
}

export default Content
