import React from 'react'
import ReactDOM from 'react-dom'

import './app.scss'

function App () {
  console.log('test')
  return (
    <div>Hello world</div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))