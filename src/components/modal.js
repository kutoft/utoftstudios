import React from 'react'

const Modal = ({ isOpen, children }) => {
  React.useEffect(() => {
    window.document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  return (
    <>
      <div className="modal">{children}</div>
      <style jsx>
        {`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            min-height: 100vh;
            padding: 30px;
            border-color: #dbdbdb;
            border-width: 1px;
            background-color: #ffffff;
            display: ${isOpen ? 'flex' : 'none'};
            align-items: center;
            justify-content: center;
            overflow: auto;
          }
        `}
      </style>
    </>
  )
}

export default Modal
