import React from 'react'
import ReactDOM from 'react-dom'

import { Icon } from '@app'
import { scopedClassMaker } from '@components/helper'
import { DialogProps } from './index.d'

import './index.scss'

const scopedClass = scopedClassMaker('hins-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const { title, isVisible, children, buttons, onClose, closeOnClickMask } = props

  const handleClickMask = () => {
    if (closeOnClickMask) {
      onClose()
    }
  }

  const content = isVisible ? (
    <div className={sc('wrapper')}>
      <div className={sc('mask')} onClick={handleClickMask}></div>
      <div className={sc()}>
        <Icon name="close" onClick={onClose} />
        <div className={sc('header')}>{title}</div>
        <div className={sc('content')}>{children}</div>
        <div className={sc('footer')}>{buttons}</div>
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(content, document.body)
}

Dialog.defaultProps = {
  closeOnClickMask: true,
}

export default Dialog
