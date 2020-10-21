import React from 'react'

const CtaWrapper = ({ children }) => {
  return (
    <>
      <div className="cta-wrapper">{children}</div>
      <style jsx>
        {`
          .cta-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  )
}

export default CtaWrapper
