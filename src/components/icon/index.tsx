import React from 'react'
import classnames from 'classnames'

import { IconProps } from './index.d'

import './importIcons'
import './index.scss'

const icon: React.FunctionComponent<IconProps> = (props) => {
  const { name, className, style, ...restProps } = props

  return (
    <div className="icon-wrapper">
      <svg style={style} className={classnames('hins-icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`} />
      </svg>
    </div>
  )
}

export default icon
