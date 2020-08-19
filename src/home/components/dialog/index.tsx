import React, { useState } from 'react'

import { Dialog } from '@app'

function DialogContent() {
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => {
    setIsShow(!isShow)
  }

  const handleModal = () => {
    const close = Dialog.modal({
      title: '提示',
      content: (
        <div>
          Dialog modal的使用示例
          <button onClick={() => close()}>close</button>
        </div>
      ),
    })
  }

  const handleConfirm = () => {
    Dialog.confirm({
      title: '提示',
      content: 'Dialog confirm的使用示例',
      onOk: () => {
        console.log('ok')
      },
      onCancel: () => {
        console.log('cancel')
      },
    })
  }

  const handleWarning = () => {
    Dialog.warning({
      title: '提示',
      content: 'Dialog warning的使用示例',
      onOk: () => {
        console.log('ok')
      },
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>example 1</button>
        <Dialog
          title="提示"
          isVisible={isShow}
          onClose={handleClick}
          buttons={[<button onClick={handleClick}>ok</button>, <button onClick={handleClick}>cancel</button>]}
        >
          Dialog的一般使用示例
        </Dialog>
      </div>
      <div>
        <button onClick={handleModal}>example 2</button>
      </div>
      <div>
        <button onClick={handleConfirm}>example 3</button>
      </div>
      <div>
        <button onClick={handleWarning}>example 4</button>
      </div>
    </div>
  )
}

export default DialogContent
