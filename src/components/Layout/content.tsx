import React from 'react'

import { ContentProps } from './index.d'

const Content: React.FC<ContentProps> = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export default Content
