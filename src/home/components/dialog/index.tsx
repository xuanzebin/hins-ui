import React from 'react'

import Example from '../example'

import DialogCode from '!!raw-loader!./example'
import Dialog from './example'

const DialogExample: React.FC<{}> = () => {
  return (
    <Example code={DialogCode}>
      <Dialog />
    </Example>
  )
}

export default DialogExample
