import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'
import { useColorMode } from '../utlis/colorModeContext'

const FilterButton = ({ category, isActive, handleClick }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Button
        className="filter-button test"
        handleClick={() => handleClick(category)}
        options={{
          variant: isActive ? 'contained' : 'outline',
          color: isActive
            ? 'primary'
            : colorMode === 'light'
            ? 'light'
            : 'dark',
          size: 'small',
        }}
      >
        {category.name}
      </Button>
      <style jsx>
        {`
          :global(.button.filter-button.test) {
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 6px 10px;
            letter-spacing: 1.25px;
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
