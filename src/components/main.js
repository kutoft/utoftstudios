import React from "react"

const Main = ({ children }) => {

  return (
    <>
      <div className="main">
        {children}
      </div>
      <style jsx>
        {`
          .main {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f5f5f5;
          }
        `}
      </style>
    </>
  )
}

export default Main