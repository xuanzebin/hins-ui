import React, { useState } from 'react'

import { Dialog } from '@app'

function IconContent() {
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>exampale 1</button>
        <Dialog
          title="提示"
          isVisible={isShow}
          onClose={handleClick}
          buttons={[<button onClick={handleClick}>ok</button>, <button onClick={handleClick}>cancel</button>]}
        >
          example 1
        </Dialog>
      </div>
    </div>
  )
}

export default IconContent
