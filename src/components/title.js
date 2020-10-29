import React from 'react'

import PropTypes from 'prop-types'

const Title = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="thqHeading1 text">{props.title}</h1>
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
            justify-content: flex-start;
            border-bottom-width: 0;
          }
          .text {
            color: inherit;
            font-size: 3rem;
            font-weight: 900;
            line-height: 1;
            padding-top: 0;
            padding-left: 5px;
            padding-right: 60px;
            padding-bottom: 0;
            text-transform: uppercase;
            position: relative;
            z-index: 1;
          }
          .text::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 20px;
            background-color: var(--amplify-primary-color);
            z-index: -1;
          }
          @media (max-width: 479px) {
            .text {
              font-size: 2rem;
            }
            .text::after {
              bottom: -6px;
              height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

Title.defaultProps = {
  title: 'TITLE',
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
