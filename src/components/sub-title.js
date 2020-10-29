import React from 'react'
import PropTypes from 'prop-types'

import { useColorMode } from '../utlis/colorModeContext'

const SubTitle = ({ title, children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <div className="container">
        <h1 className="thqHeading1 text">{title}</h1>
        {children}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            max-width: 800px;
            align-items: center;
            padding-top: 60px;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: space-between;
            border-bottom-width: 0;
          }
          .text {
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-prmimary)'};
            font-size: 1.5rem;
            font-weight: 900;
            padding-top: 0;
            border-color: var(--amplify-primary-color);
            padding-left: 5px;
            padding-right: 40px;
            padding-bottom: 0;
            text-transform: uppercase;
            border-bottom-width: 10px;
          }
          @media (max-width: 479px) {
            .text {
              font-size: 2rem;
              border-bottom-width: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

SubTitle.defaultProps = {
  title: 'TITLE',
}

SubTitle.propTypes = {
  title: PropTypes.string,
}

export default SubTitle
