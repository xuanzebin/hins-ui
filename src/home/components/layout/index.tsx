import React from 'react'

import Example from '../example'

import DialogCode from '!!raw-loader!./example'
import Layout from './example'

const LayoutExample: React.FC<{}> = () => {
  return (
    <Example code={DialogCode}>
      <Layout />
    </Example>
  )
}

export default LayoutExample
