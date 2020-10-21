import React from 'react'

import PropTypes from 'prop-types'

const SubTitle = (props) => {
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
            color: #110730;
            font-size: 1.5rem;
            font-weight: 900;
            padding-top: 0;
            border-color: #0a8827;
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
