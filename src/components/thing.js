import React from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'
import { useColorMode } from '../utlis/colorModeContext'
import useMatchMedia from '../utlis/useMatchMedia'

const Thing = ({ src, name, date, description }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [thingSize, setThingSize] = React.useState(300)
  const { colorMode } = useColorMode()
  const { state: isMobile, setState: setIsMobile } = useMatchMedia(
    false,
    '(max-width: 479px)'
  )
  const { state: isTablet, setState: setIsTablet } = useMatchMedia(
    false,
    '(min-width: 480px) and (max-width: 767px)'
  )
  const { state: isDesktop, setState: setIsDesktop } = useMatchMedia(
    false,
    '(min-width: 768px)'
  )

  const handleClick = () => {
    setIsOpen((o) => !o)
  }

  const thingRef = React.createRef()

  React.useEffect(() => {
    setThingSize(thingRef.current.offsetWidth)
  }, [isOpen, isMobile, isTablet, isDesktop])

  return (
    <>
      <div ref={thingRef} className="container" onClick={handleClick}>
        <div className="container-image">
          <Image
            src={src}
            height={thingSize * 0.5625}
            width={thingSize}
            sizes={['(max-width: 479px) 450px', '(max-width: 767px) 750px']}
            alt={name}
          />
        </div>
        <div className="container2">
          <h3 className="thqHeading3 text">{name}</h3>
          <span className="date">{date}</span>
        </div>
        {isOpen && description && (
          <div className="container3">
            <p>{description}</p>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            overflow: auto;
            position: relative;
            padding: ${isOpen ? '10px' : '0'};
            background-color: inherit;
            border: ${isOpen ? '1px solid' : 'none'};
            border-color: ${colorMode === 'light'
              ? 'var(--light-shade)'
              : 'var(--dark-shade)'};
            grid-column: ${isOpen ? '1 / span 3' : 'auto'};
          }
          @media (max-width: 767px) {
            .container {
              grid-column: ${isOpen ? '1 / span 2' : 'auto'};
            }
          }
          @media (max-width: 479px) {
            .container {
              grid-column: auto;
            }
          }
          .container-image {
            width: 100%;
            display: flex;
            overflow: hidden;
            border-radius: 4px;
            background-color: inherit;
            border: 1px solid;
            border-color: ${colorMode === 'light'
              ? 'var(--light-shade)'
              : 'var(--dark-shade)'};
            background-position: center center;
            background-repeat: no-repeat;
            background-size: ${isOpen ? 'contain' : 'cover'};
          }
          .container-image :global(img) {
            object-fit: ${isOpen ? 'contain' : 'cover'};
          }
          .image {
            max-width: 100%;
            min-width: 100%;
            min-height: 100px;
            object-fit: cover;
          }
          .container2 {
            display: flex;
            padding: 10px;
            flex-wrap: nowrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container3 {
            padding: 10px;
            font-size: 0.875rem;
          }
          .text {
            overflow: hidden;
            flex-grow: 1;
            font-size: 14px;
            white-space: nowrap;
            padding-right: 20px;
            text-overflow: ellipsis;
          }
          .date {
            font-size: 12px;
            flex-shrink: 0;
          }
        `}
      </style>
    </>
  )
}

Thing.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  isOpen: false,
}

Thing.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Thing
