import React from 'react'

import { FooterProps } from './index.d'

const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export default Footer
