import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

const AdminEdit = ({ handleClose, handleSave, saveLabel, children }) => {
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
          <Button label={saveLabel} handleClick={handleSave} />
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
            color: #2b2b2b;
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
          }
          .fields :global(input) {
            display: block;
            padding: 9px;
            border-color: #dbdbdb;
            border-width: 1px;
            flex-grow: 1;
            line-height: 1.5;
          }
          .fields :global(select) {
            display: block;
            padding: 9px;
            border-color: #dbdbdb;
            border-width: 1px;
            flex-grow: 1;
            line-height: 1.5;
            background-image: linear-gradient(
                45deg,
                transparent 50%,
                #2b2b2b 50%
              ),
              linear-gradient(135deg, #2b2b2b 50%, transparent 50%),
              linear-gradient(to right, #dbdbdb, #dbdbdb);
            background-position: calc(100% - 20px) calc(1rem + 4px),
              calc(100% - 15px) calc(1rem + 4px), calc(100% - 2.5rem);
            background-size: 5px 5px, 5px 5px, 1px 1.5rem;
            background-repeat: no-repeat;
            -webkit-appearance: none;
          }
          .fields :global(textarea) {
            width: 100%;
            height: 200px;
            display: block;
            padding: 20px;
            border-color: #dbdbdb;
            border-width: 1px;
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
