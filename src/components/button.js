import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, handleClick, options, children }) => {
  return (
    <>
      <button className="thqButton button" onClick={() => handleClick()}>
        {label ? label : children}
      </button>
      <style jsx>
        {`
          .button {
            font-size: ${options.size === 'small'
              ? '0.75rem'
              : options.size === 'large'
              ? '1rem'
              : '0.875rem'};
            color: ${options.variant === 'outline' ? '#2b2b2b' : '#ffffff'};
            width: ${options.fullWidth ? '100%' : 'auto'};
            display: block;
            padding: 10px;
            align-self: center;
            text-align: center;
            border-color: ${options.variant === 'outline'
              ? options.color === 'secondary'
                ? '#0a8827'
                : '#130930'
              : 'transparent'};
            border-width: ${options.variant === 'outline' ? '1px' : '0'};
            background-color: ${options.variant !== 'outline'
              ? options.color === 'secondary'
                ? '#0a8827'
                : '#130930'
              : '#ffffff'};
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  )
}
Button.defaultProps = {
  options: {
    fullWidth: false,
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['contained', 'outline']),
    color: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
}

export default Button
