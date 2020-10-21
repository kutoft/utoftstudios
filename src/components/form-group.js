import React from 'react'

const FormGroup = ({ children }) => {
  return (
    <>
      <div className="form-group">{children}</div>
      <style jsx>
        {`
          .form-group {
            width: 100%;
            display: flex;
            padding: 20px;
            flex-wrap: nowrap;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default FormGroup
