import React from 'react'
import Proptypes from 'prop-types'

import Thing from './thing'

const ThingList = ({ data }) => {
  return (
    <>
      <div className="container">
        {data &&
          data.map((thing) => {
            const date = new Date(thing.createdAt)
            return (
              <Thing
                key={thing.id}
                src={thing.src}
                date={`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
                name={thing.name}
                description={thing.description}
              ></Thing>
            )
          })}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: grid;
            padding: 20px;
            grid-gap: 20px;
            overflow: auto;
            max-width: 800px;
            padding-left: 20px;
            align-content: start;
            justify-items: center;
            padding-right: 20px;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-auto-flow: dense;
          }
          @media (max-width: 767px) {
            .container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

ThingList.proptypes = {
  data: Proptypes.arrayOf({
    src: Proptypes.string,
    name: Proptypes.string,
    data: Proptypes.string,
  }),
}

export default ThingList
