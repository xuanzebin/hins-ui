import React from 'react'
import ReactDOM from 'react-dom'

import './app.scss'

interface Props {
  content: string
}
interface State {}

class Button extends React.Component<Props, State> {
  render() {
    const { content } = this.props
    return <button>{content}</button>
  }
}

function App() {
  return (
    <div>
      Hello world!
      <Button content={'btn'} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
