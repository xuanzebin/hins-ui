import React from 'react'

import { IconProps } from './index.d'

import './importIcons'

const icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props

  return (
    <div>
      <svg>
        <use xlinkHref={`#${name}`} />
      </svg>
    </div>
  )
}

export default icon
