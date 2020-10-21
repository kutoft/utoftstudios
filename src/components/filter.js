import React from 'react'
import PropTypes from 'prop-types'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorys } from '../graphql/queries'

import Container from './container'
import FilterButton from './filter-button'

const Filter = ({ category, serverCategorys, handleCategoryChange }) => {
  const [categories, setCategories] = React.useState(
    serverCategorys.data.listCategorys.items
  )

  React.useEffect(() => {
    const getData = async () => {
      const categoriesData = await API.graphql(
        graphqlOperation(listCategorys)
      ).catch((error) => {
        console.log(error)
      })

      if (categoriesData) {
        setCategories(categoriesData.data.listCategorys.items)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Container>
        <div className="wrap">
          {categories
            .sort((a, b) => a.id - b.id)
            .map((c) => (
              <FilterButton
                key={c.id}
                category={c}
                isActive={c.id === category}
                handleClick={handleCategoryChange}
              />
            ))}
        </div>
      </Container>
      <style jsx>
        {`
          .wrap {
            padding-top: 10px;
          }
        `}
      </style>
    </>
  )
}

Filter.propTypes = {
  category: PropTypes.string,
  serverCategorys: PropTypes.array,
  handleCategoryChange: PropTypes.func,
}

export default Filter
