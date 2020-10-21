import React from 'react'
import { useColorMode } from '../utlis/colorModeContext'

const Main = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <div className="main">{children}</div>
      <style jsx>
        {`
          :global(body) {
            color: ${colorMode === 'light' ? '#070217' : '#f5f5f5'};
            background-color: ${colorMode === 'light' ? '#f5f5f5' : '#070217'};
          }
          .main {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Main
