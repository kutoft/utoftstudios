import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ category, isActive, handleClick }) => {
  return (
    <>
      <button
        className={`thqButton button ${isActive ? 'button-active' : ''}`}
        onClick={() => handleClick(category)}
      >
        {category.name}
      </button>
      <style jsx>
        {`
          .button {
            color: inherit;
            font-size: 12px;
            font-weight: 700;
            border-color: inherit;
            border-width: 1px;
            margin-right: 10px;
            margin-bottom: 10px;
            letter-spacing: 1.25px;
            text-transform: uppercase;
            background-color: inherit;
          }
          .button-active {
            color: #fff;
            border-color: #0a8827;
            background-color: #0a8827;
          }
        `}
      </style>
    </>
  )
}

FilterButton.defaultProps = {
  isActive: false,
}

FilterButton.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  isActive: PropTypes.bool,
}

export default FilterButton
