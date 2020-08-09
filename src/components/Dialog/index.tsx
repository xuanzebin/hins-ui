import React from 'react'
import ReactDOM from 'react-dom'

import { Icon } from '@app'
import { scopedClassMaker } from '@components/helper'
import { DialogTypes, DialogModal, DialogConfirm, DialogWarning } from './index.d'

import './index.scss'

const scopedClass = scopedClassMaker('hins-dialog')
const sc = scopedClass

const Dialog: DialogTypes = (props) => {
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
        <div className={sc('footer')}>
          {buttons && buttons.length && buttons.map((button, index) => React.cloneElement(button, { key: index }))}
        </div>
      </div>
    </div>
  ) : null

  return ReactDOM.createPortal(content, document.body)
}

const modal = ({ title, content, buttons }: DialogModal): (() => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const div = document.createElement('div')
  document.body.append(div)
  const component = (
    <Dialog buttons={buttons} isVisible={true} title={title} onClose={close}>
      {content}
    </Dialog>
  )
  ReactDOM.render(component, div)
  return close
}

const warning = ({ content, title, onOk }: DialogWarning): void => {
  const handleOk = () => {
    onOk && onOk()
    close()
  }
  const buttons = [<button onClick={handleOk}>OK</button>]
  const close = modal({ content, title, buttons })
}

const confirm = ({ content, title, onOk, onCancel }: DialogConfirm): void => {
  const handleOk = () => {
    onOk && onOk()
    close()
  }
  const handleCancel = () => {
    onCancel && onCancel()
    close()
  }
  const buttons = [<button onClick={handleOk}>确认</button>, <button onClick={handleCancel}>取消</button>]
  const close = modal({ content, title, buttons })
}

Dialog.defaultProps = {
  closeOnClickMask: true,
}

Dialog.modal = modal
Dialog.confirm = confirm
Dialog.warning = warning

export default Dialog
