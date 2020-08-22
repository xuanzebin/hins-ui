import React from 'react'

import Example from '../example'

import DialogCode from '!!raw-loader!./example'
import Icon from './example'

const IconExample: React.FC<{}> = () => {
  return (
    <Example code={DialogCode}>
      <Icon />
    </Example>
  )
}

export default IconExample
