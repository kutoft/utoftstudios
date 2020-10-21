import React from 'react'
import Head from 'next/head'
import { API, graphqlOperation } from 'aws-amplify'
import { listDescriptions } from '../graphql/queries'

import useAsync from '../utlis/useAsync'

import Header from '../components/header'
import Title from '../components/title'
import Quote from '../components/quote'
import Footer from '../components/footer'
import Main from '../components/main'

const initialDescriptions = [
  {
    id: '1',
    value:
      'Hybrid front-end developer and designer with 7+ years of experience in responsive design and development, interaction design, user experience design, branding and print design. Experienced in web standards, multiple CMS systems, and cross functionality between devices. Worked with clients such as Land O’Lakes, Purinamills, WinField United, Ford, Maserati, Universal Studios Hollywood, Autodata Group, UnityWorks, Unidos Financial, Graham Media Group, LAKANA, Nexstar Broadcasting.',
    createdAt: '2020-09-25T20:33:26.627Z',
    updatedAt: '2020-09-25T20:33:26.627Z',
  },
  {
    id: '0',
    value:
      'Development Lead with proven experience in leading medium to large enterprise cross functional IT teams including external vendors and contractors. Work closely with Business Analyst to understand and interpret requirements while writing detailed design and technical specification documents in an Agile environment. Supply architectural guidance and ensure best practices are being followed and standards are met. Guide work direction for individual contributors as well as coach and mentor developers towards professional growth and team building.',
    createdAt: '2020-09-25T20:33:11.425Z',
    updatedAt: '2020-09-25T20:33:11.425Z',
  },
]

const About = ({ serverDescriptions }) => {
  const { data: descriptions, run } = useAsync({ data: serverDescriptions })

  React.useEffect(() => {
    run(API.graphql(graphqlOperation(listDescriptions)))
  }, [run])

  return (
    <>
      <div className="container">
        <Head>
          <title>About | Kevin Utoft | Utoft Studios</title>
          <meta
            property="og:title"
            content="About | Kevin Utoft | Utoft Studios"
          />
          <meta
            property="description"
            content={
              descriptions && descriptions.data.listDescriptions.items[0].value
            }
          />
          <meta
            property="og:description"
            content={
              descriptions && descriptions.data.listDescriptions.items[0].value
            }
          />
        </Head>
        <Header></Header>
        <Main>
          <Title title="Hello"></Title>
          <div className="container2">
            {descriptions &&
              descriptions.data.listDescriptions.items.map((description) => (
                <p key={description.id} className="text">
                  {description.value}
                </p>
              ))}
          </div>
          <Quote quote="Kevin Utoft"></Quote>
        </Main>
        <Footer></Footer>
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
          .container2 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            align-items: center;
            padding-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: flex-start;
          }
          .text {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .text1 {
            font-size: 18px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  )
}

export async function getStaticProps() {
  const res = await API.graphql(graphqlOperation(listDescriptions))

  return {
    props: {
      serverDescriptions: res,
    },
  }
}

export default About
