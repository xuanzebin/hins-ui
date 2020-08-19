import React from 'react'

import { HeaderProps } from './index.d'

const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export default Header
