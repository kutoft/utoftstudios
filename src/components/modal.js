import React from 'react'

import { useColorMode } from '../utlis/colorModeContext'

const Modal = ({ isOpen, children }) => {
  const { colorMode } = useColorMode()

  React.useEffect(() => {
    window.document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  return (
    <>
      <div className="modal">
        <div className="overflow">{children}</div>
      </div>
      <style jsx>
        {`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1000;
            padding: 30px;
            border-color: #dbdbdb;
            border-width: 1px;
            background-color: ${colorMode === 'light'
              ? 'var(--light-primary)'
              : 'var(--dark-primary)'};
            display: ${isOpen ? 'flex' : 'none'};
            align-items: center;
            justify-content: center;
            overflow: auto;
          }
          .overflow {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Modal
