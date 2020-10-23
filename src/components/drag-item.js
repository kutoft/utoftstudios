import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'
import { useColorMode } from '../utlis/colorModeContext'

const DragItem = ({
  draggable,
  src,
  item,
  heading,
  handleEdit,
  handleDelete,
}) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <div className="drag-item container" draggable={draggable} id={item.id}>
        {draggable && (
          <div className="dragable">
            <svg viewBox="0 0 219.42857142857142 1024" className="thqIcon icon">
              <title>ellipsis-v</title>
              <path d="M219.429 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857zM219.429 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857zM219.429 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857z"></path>
            </svg>
          </div>
        )}
        {src && <div className="container-image"></div>}
        <div className="container-text">
          <h4 className="thqHeading4 text">{heading ? heading : item.value}</h4>
        </div>
        <div className="actions">
          <Button
            handleClick={() => handleEdit(item)}
            options={{
              color: 'secondary',
              variant: 'outline',
              size: 'small',
            }}
          >
            Edit
          </Button>
          <Button
            handleClick={() => handleDelete(item)}
            options={{
              color: 'secondary',
              variant: 'outline',
              size: 'small',
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: ${colorMode === 'light'
              ? 'var(--light-tint)'
              : 'var(--dark-tint)'};
            padding: ${draggable ? '0' : '10px'};
            border: ${draggable ? 'none' : '1px solid'};
            border-color: ${colorMode === 'light'
              ? 'var(--light-shade)'
              : 'var(--dark-shade)'};
          }
          .dragable {
            display: flex;
            padding: 5px;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .icon {
            fill: #dbdbdb;
            width: 24px;
            height: 24px;
            padding: 1px;
          }
          .container-image {
            width: 50px;
            height: 50px;
            flex-shrink: 0;
            margin: 0 10px;
            overflow: hidden;
            border-radius: 50%;
            background-color: rgba(120, 120, 120, 0.4);
            border: 1px solid;
            border-color: ${colorMode === 'light'
              ? 'var(--light-shade)'
              : 'var(--dark-shade)'};
            background-image: url(${src});
            background-position: center center;
            background-size: cover;
          }
          .image {
            height: 50px;
            min-width: 100%;
            align-self: stretch;
            object-fit: cover;
            object-position: center;
          }
          .container-text {
            display: flex;
            padding: 10px;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            overflow: hidden;
          }
          .text {
            flex-grow: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .actions {
            padding: 10px;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
            flex-basis: 137px;
          }
        `}
      </style>
    </>
  )
}

DragItem.defaultProps = {
  src: null,
}

DragItem.propTypes = {
  src: PropTypes.string,
  item: PropTypes.object.isRequired,
  heading: PropTypes.string,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  dragStart: PropTypes.func,
  dragEnd: PropTypes.func,
  drop: PropTypes.func,
}

export default DragItem
