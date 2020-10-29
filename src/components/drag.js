import React from 'react'

import { useColorMode } from '../utlis/colorModeContext'

function Drag({ handleOrderChange, children }) {
  const { colorMode } = useColorMode()

  const dragOver = (event) => {
    // prevent default to allow drop
    event.preventDefault()
    if (event.target.classList.contains('drag-item')) {
    }
  }
  const dragEnter = (event) => {
    // highlight potential drop target when the draggable element enters it
    if (event.target.classList.contains('drag-zone')) {
      event.target.style.background =
        colorMode === 'light' ? 'var(--light-shade)' : 'var(--dark-shade)'
    }
  }
  const dragLeave = (event) => {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.classList.contains('drag-zone')) {
      event.target.style.background = ''
    }
  }

  // FOR THE CHILD
  const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id)
  }
  const dragEnd = (event) => {}
  const drop = (event) => {
    event.preventDefault()
    if (event.target.classList.contains('drag-zone')) {
      const id = event.dataTransfer.getData('text/plain')
      const child = event.target
      const parent = child.parentNode
      const index = Array.prototype.indexOf.call(parent.children, child)

      child.style.background = ''
      handleOrderChange(id, index)
    }
  }

  return (
    <>
      <div
        className="drag-container"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDragOver={dragOver}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        onDrop={drop}
      >
        {children}
      </div>
      <style jsx>
        {`
          .drag-container {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Drag
