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
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
            background-color: ${colorMode === 'light'
              ? 'var(--light-primary)'
              : 'var(--dark-primary)'};
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
