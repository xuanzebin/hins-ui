import React from 'react'

interface Props {
  content: string
}
interface State {}

export default class Button extends React.Component<Props, State> {
  render() {
    const { content } = this.props
    return <button>{content}</button>
  }
}
