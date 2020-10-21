import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { API, graphqlOperation } from 'aws-amplify'
import {
  listThings,
  getCategory,
  listQuotes,
  listCategorys,
} from '../graphql/queries'

import useAsync from '../utlis/useAsync'

import Header from '../components/header'
import Title from '../components/title'
import Filter from '../components/filter'
import ThingList from '../components/thing-list'
import Quote from '../components/quote'
import Footer from '../components/footer'
import Main from '../components/main'

const categoryAll = 'Do Things'

const Home = ({ serverThings, serverQuotes, serverCategorys }) => {
  const router = useRouter()
  const [category, setCateogry] = React.useState(null)
  const [title, setTitle] = React.useState(categoryAll)

  const { data: things, run: runThings } = useAsync({ data: serverThings })
  const { data: quotes, run: runQuotes } = useAsync({ data: serverQuotes })

  const handleCategoryChange = (cat) => {
    if (cat.id !== category) {
      setTitle(cat.name)
      setCateogry(cat.id)
    } else {
      setTitle(categoryAll)
      setCateogry(null)
    }
  }

  React.useEffect(() => {
    if (category) {
      runThings(
        API.graphql(graphqlOperation(getCategory, { id: category })),
        category
      )
      window.history.pushState(
        { category },
        `title ${category}`,
        `?category=${category}`
      )
    } else {
      runThings(API.graphql(graphqlOperation(listThings)), 'things')
      window.history.pushState({ category: null }, 'title', '?')
    }
  }, [category, runThings])

  React.useEffect(() => {
    runQuotes(API.graphql(graphqlOperation(listQuotes)), 'quotes')
  }, [runQuotes])

  React.useEffect(() => {
    if (router.query.category) {
      setCateogry(router.query.category)
    }
  }, [router.query.category])

  return (
    <>
      <div className="container">
        <Head>
          <title>Home | Kevin Utoft | Utoft Studios</title>
          <meta
            property="og:title"
            content="Home | Kevin Utoft | Utoft Studios"
          />
          <meta
            property="description"
            content={quotes.data.listQuotes.items[0].value}
          />
          <meta
            property="og:description"
            content={quotes.data.listQuotes.items[0].value}
          />
        </Head>
        <Header />
        <Main>
          <Title title={`I ${title}`} />
          <Filter
            category={category}
            serverCategorys={serverCategorys}
            handleCategoryChange={handleCategoryChange}
          />
          <ThingList
            data={
              things?.data.listThings?.items ??
              things?.data.getCategory.things.items
            }
          />
          {quotes &&
            quotes.data.listQuotes.items.map((quote) => (
              <Quote key={quote.id} quote={quote.value} />
            ))}
          {!quotes && <Quote quote="Always The Next One" />}
        </Main>
        <Footer />
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export async function getStaticProps() {
  const things = await API.graphql(graphqlOperation(listThings))
  const quotes = await API.graphql(graphqlOperation(listQuotes))
  const categorys = await API.graphql(graphqlOperation(listCategorys))

  return {
    props: {
      serverThings: things,
      serverQuotes: quotes,
      serverCategorys: categorys,
    },
  }
}

export default Home
