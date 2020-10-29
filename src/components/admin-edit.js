import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'
import { useColorMode } from '../utlis/colorModeContext'

const AdminEdit = ({ handleClose, handleSave, saveLabel, children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <div className="edit">
        <div className="fields">{children}</div>
        <div className="actions">
          <Button
            label="Close"
            handleClick={handleClose}
            options={{
              variant: 'outline',
              color: 'secondary',
            }}
          />
          <Button
            label={saveLabel}
            options={{ color: colorMode === 'light' ? 'dark' : 'light' }}
            handleClick={handleSave}
          />
        </div>
      </div>
      <style jsx>
        {`
          .edit {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 30px;
          }
          .fields {
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fields :global(:not(label)) {
            margin-bottom: 15px;
          }
          .fields :global(label) {
            font-size: 0.625rem;
            margin-bottom: 3px;
            letter-spacing: 1.25px;
            text-transform: uppercase;
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
          }
          .fields :global(input) {
            display: block;
            padding: 9px;
            border-color: var(--light-shade);
            border-width: 1px;
            flex-grow: 1;
            line-height: 1.5;
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
            background-color: ${colorMode === 'light'
              ? 'var(--light-tint)'
              : 'var(--dark-tint)'};
          }
          .fields :global(select) {
            display: block;
            padding: 9px;
            border-color: var(--light-shade);
            border-width: 1px;
            flex-grow: 1;
            line-height: 1.5;
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
            background-color: ${colorMode === 'light'
              ? 'var(--light-tint)'
              : 'var(--dark-tint)'};
            background-image: linear-gradient(
                45deg,
                transparent 50%,
                var(--dark-tint) 50%
              ),
              linear-gradient(135deg, var(--dark-tint) 50%, transparent 50%),
              linear-gradient(to right, var(--light-shade), var(--light-shade));
            background-position: calc(100% - 20px) calc(1rem + 4px),
              calc(100% - 15px) calc(1rem + 4px), calc(100% - 2.5rem);
            background-size: 5px 5px, 5px 5px, 1px 1.5rem;
            background-repeat: no-repeat;
            -webkit-appearance: none;
          }
          .fields :global(textarea) {
            width: 100%;
            height: 400px;
            display: block;
            padding: 20px;
            color: ${colorMode === 'light'
              ? 'var(--dark-primary)'
              : 'var(--light-primary)'};
            border-color: ${colorMode === 'light'
              ? 'var(--light-shade)'
              : 'var(--dark-shade)'};
            border-width: 1px;
            background-color: ${colorMode === 'light'
              ? 'var(--light-tint)'
              : 'var(--dark-tint)'};
          }
          .actions {
            padding: 10px 0;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 3fr;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

AdminEdit.defaultProps = {
  saveLabel: 'Save',
}

AdminEdit.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  saveLabel: PropTypes.string,
}

export default AdminEdit
