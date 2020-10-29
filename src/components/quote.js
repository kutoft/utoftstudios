import React from 'react'

import PropTypes from 'prop-types'

const Quote = ({ quote }) => {
  return (
    <>
      <div className="container">
        <h2 className="thqHeading1 text">{quote}</h2>
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
            padding-bottom: 60px;
            justify-content: flex-end;
            border-bottom-width: 0;
          }
          .text {
            color: inherit;
            font-size: 6rem;
            max-width: 640px;
            text-align: right;
            font-weight: 900;
            line-height: 0.6;
            margin-left: 0;
            padding-top: 0;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0;
            text-transform: uppercase;
            border-right-width: 0;
          }
          @media (max-width: 479px) {
            .text {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </>
  )
}

Quote.defaultProps = {
  quote: 'QUOTE',
}

Quote.propTypes = {
  quote: PropTypes.string,
}

export default Quote
