import React from 'react'
import ReactDOM from 'react-dom'

import Button from './Button'

import './app.scss'

function App() {
  return (
    <div>
      Hello world!
      <Button content={'btn'} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
