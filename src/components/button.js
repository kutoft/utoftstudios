import React from 'react'
import PropTypes from 'prop-types'

import { useColorMode } from '../utlis/colorModeContext'

const defaultOptions = {
  fullWidth: false,
  variant: 'contained',
  color: 'light',
  size: 'medium',
}

const Button = ({ label, handleClick, options, children }) => {
  const { colorMode } = useColorMode()

  const { fullWidth, variant, color, size } = {
    ...defaultOptions,
    ...options,
  }

  const getColor = () => {
    if (variant === 'outline') {
      if (colorMode === 'light') {
        return 'var(--dark-tint)'
      }
      if (colorMode === 'dark') {
        return 'var(--light-tint)'
      }
    }
    if (variant !== 'outline') {
      if (color === 'primary') {
        return 'var(--light-tint)'
      }
      if (color === 'secondary') {
        return 'var(--light-tint)'
      }
      if (color === 'light') {
        return 'var(--dark-tint)'
      }
      if (color === 'dark') {
        return 'var(--light-tint)'
      }
    }
    return 'var(--light-tint)'
  }

  const getBackgroundColor = () => {
    if (variant === 'outline') {
      if (colorMode === 'light') {
        return 'var(--light-tint)'
      }
      if (colorMode === 'dark') {
        return 'var(--dark-tint)'
      }
    }
    if (variant !== 'outline') {
      if (color === 'primary') {
        return 'var(--amplify-primary-color)'
      }
      if (color === 'secondary') {
        return 'var(--amplify-secondary-color)'
      }
      if (color === 'light') {
        return 'var(--light-tint)'
      }
      if (color === 'dark') {
        return 'var(--dark-tint)'
      }
    }
    return 'var(--light-tint)'
  }
  return (
    <>
      <button className="thqButton button" onClick={() => handleClick()}>
        {label ? label : children}
      </button>
      <style jsx>
        {`
          .button {
            font-size: ${size === 'small'
              ? '0.75rem'
              : size === 'large'
              ? '1rem'
              : '0.875rem'};
            color: ${getColor()};
            width: ${fullWidth ? '100%' : 'auto'};
            display: block;
            padding: 10px;
            align-self: center;
            text-align: center;
            border-color: ${variant === 'outline'
              ? color === 'secondary'
                ? '#0a8827'
                : '#130930'
              : 'transparent'};
            border-width: ${variant === 'outline' ? '1px' : '0'};
            background-color: ${getBackgroundColor()};
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  )
}
Button.defaultProps = defaultOptions

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['contained', 'outline']),
    color: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
}

export default Button
