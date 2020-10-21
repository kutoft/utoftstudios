import React from "react"

const Container = ({ children }) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Container