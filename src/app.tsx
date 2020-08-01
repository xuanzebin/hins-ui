import React from 'react'
import ReactDOM from 'react-dom'

import Icon from '@components/icon'

import './app.scss'

function App() {
  return (
    <div>
      <Icon name="browser" />
      <Icon name="clock" />
      <Icon name="calculator" />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
