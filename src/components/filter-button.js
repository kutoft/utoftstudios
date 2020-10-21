import React from "react"
import PropTypes from "prop-types"

const FilterButton = ({ category, isActive, handleClick }) => {
return (
  <>
    <button className={`thqButton button ${isActive ? "button-active" : ""}`} onClick={() => handleClick(category)}>{category.name}</button>
    <style jsx>
        {`
          .button {
            color: #110730;
            font-size: 12px;
            font-weight: 700;
            border-color: #110730;
            border-width: 1px;
            margin-right: 10px;
            margin-bottom: 10px;
            letter-spacing: 1.25px;
            text-transform: uppercase;
          }
          .button-active {
            color: #0a8827;
            border-color: #0a8827;
            background-color: #ffffff;
          }
        `}
      </style>
  </>
  )
}

FilterButton.defaultProps = {
  isActive: false
}

FilterButton.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  isActive: PropTypes.bool
}

export default FilterButton