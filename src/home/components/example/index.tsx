import React, { HTMLAttributes, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface Props extends HTMLAttributes<HTMLElement> {
  code: string
}

const Example: React.FC<Props> = (props) => {
  const { children, code } = props
  const [showCode, setShowCode] = useState(false)
  const buttonText = showCode ? '关闭代码' : '显示代码'
  const highlightCode = showCode ? (
    <Highlight {...defaultProps} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : null

  return (
    <div>
      <div>{children}</div>
      <div>
        <button onClick={() => setShowCode(!showCode)} style={{ margin: '10px 0' }}>
          {buttonText}
        </button>
      </div>
      <div>{highlightCode}</div>
    </div>
  )
}

export default Example
