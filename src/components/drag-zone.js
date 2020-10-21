import React from 'react'

function DragZone({ children }) {
  const dragOver = (event) => {
    // prevent default to allow drop
    event.preventDefault()
  }
  const dragEnter = (event) => {
    // highlight potential drop target when the draggable element enters it
    event.target.style.background = 'purple'
  }
  const dragLeave = (event) => {
    // reset background of potential drop target when the draggable element leaves it
    event.target.style.background = ''
  }

  // FOR THE CHILD
  const dragStart = (event) => {
    // make it half transparent
    event.target.style.opacity = 0.5
  }
  const dragEnd = (event) => {
    // reset the transparency
    event.target.style.opacity = ''
  }
  const drop = (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault()
    console.log(event.bubbles)
    console.log(event.eventPhase)
    console.log(event)
    // move dragged elem to the selected drop target
    event.target.style.background = ''
    // dragged.parentNode.removeChild(dragged)
    // event.target.appendChild(dragged)
  }

  return (
    <>
      <div className="drag-zone">{children}</div>
      <style jsx>
        {`
          .drag-zone {
            width: 100%;
            padding: 10px;
            border-color: #dbdbdb;
            border-width: 1px;
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  )
}

export default DragZone
