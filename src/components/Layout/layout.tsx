import React, { ReactElement } from 'react'
import classnames from 'classnames'

import { scopedClassMaker } from '@components/helper'

import { LayoutProps } from './index.d'
import { Sider, Header, Content, Footer } from './index'

import './layout.scss'

const scopedClass = scopedClassMaker('hins-layout')
const sc = scopedClass

function checkElementHaveSider(element: Exclude<React.ReactNode, React.ReactNodeArray>): boolean {
  if (
    element instanceof Object &&
    'type' in element &&
    [Layout, Sider, Header, Content, Footer].includes(element.type as React.FC)
  ) {
    return element.type === Sider
  } else {
    throw new Error('Layout组件内只接受Header、Content、Footer或Sider！')
  }
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props
  const isSingleChildren = !(children instanceof Array)
  const hasSider = isSingleChildren
    ? checkElementHaveSider(children)
    : (children as ReactElement[]).some((child) => checkElementHaveSider(child))

  return <div className={classnames(sc(), { hasSider })}>{children}</div>
}

export default Layout
