import React from 'react'
import PropTypes from 'prop-types'

import { useColorMode } from '../utlis/colorModeContext'

const defaultOptions = {
  fullWidth: false,
  variant: 'contained',
  color: 'light',
  size: 'medium',
}

const Button = ({ label, className, handleClick, options, children }) => {
  const { colorMode } = useColorMode()

  const { fullWidth, variant, color, size } = {
    ...defaultOptions,
    ...options,
  }

  const getTextColor = () => {
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

  const getBorderColor = () => {
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

  const [textColor, setTextColor] = React.useState(() => getTextColor())
  const [borderColor, setBorderColor] = React.useState(() => getBorderColor())
  const [backgroundColor, setBackgroundColor] = React.useState(() =>
    getBackgroundColor()
  )

  React.useEffect(() => {
    setTextColor(getTextColor())
    setBorderColor(getBorderColor())
    setBackgroundColor(getBackgroundColor())
  }, [colorMode, color, variant])

  // console.log({ textColor })

  return (
    <>
      <button
        className={`thqButton button ${className}`}
        onClick={() => handleClick()}
      >
        {label ? label : children}
      </button>
      <style jsx>
        {`
          .button {
            display: block;
            padding: 10px;
            align-self: center;
            text-align: center;
            border-width: 1px;
            text-transform: uppercase;
          }
        `}
      </style>
      <style jsx>
        {`
          .button {
            font-size: ${size === 'small'
              ? '0.75rem'
              : size === 'large'
              ? '1rem'
              : '0.875rem'};
            color: ${textColor};
            width: ${fullWidth ? '100%' : 'auto'};
            border-color: ${borderColor};
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['contained', 'outline']),
    color: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
}

export default Button
