import React from 'react'

import PropTypes from 'prop-types'

const Thing = ({ src, name, date, description }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen((o) => !o)
  }

  return (
    <>
      <div className="container" onClick={handleClick}>
        <div className="container-image"></div>
        <div className="container2">
          <h3 className="thqHeading3 text">{name}</h3>
          <span className="date">{date}</span>
        </div>
        {isOpen && description && (
          <div className="container3">
            <p>{description}</p>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            overflow: auto;
            position: relative;
            padding: ${isOpen ? '10px' : '0'};
            background: ${isOpen ? '#fff' : 'none'};
            border: ${isOpen ? '1px solid #dbdbdb' : 'none'};
            grid-column: ${isOpen ? '1 / span 3' : 'auto'};
          }
          @media (max-width: 767px) {
            .container {
              grid-column: ${isOpen ? '1 / span 2' : 'auto'};
            }
          }
          @media (max-width: 479px) {
            .container {
              grid-column: auto;
            }
          }
          .container-image {
            width: 100%;
            height: 0;
            padding-top: ${isOpen ? '56.25%' : '100px'};
            display: flex;
            overflow: hidden;
            border-radius: 4px;
            background-color: #f5f5f5;
            border: 1px solid #dbdbdb;
            background-image: url(${src});
            background-position: center center;
            background-repeat: no-repeat;
            background-size: ${isOpen ? 'contain' : 'cover'};
          }
          .image {
            max-width: 100%;
            min-width: 100%;
            min-height: 100px;
            object-fit: cover;
          }
          .container2 {
            display: flex;
            padding: 10px;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container3 {
            padding: 10px;
          }
          .text {
            overflow: hidden;
            flex-grow: 1;
            font-size: 14px;
            white-space: nowrap;
            padding-right: 20px;
            text-overflow: ellipsis;
          }
          .date {
            font-size: 12px;
            flex-shrink: 0;
          }
        `}
      </style>
    </>
  )
}

Thing.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  isOpen: false,
}

Thing.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Thing
