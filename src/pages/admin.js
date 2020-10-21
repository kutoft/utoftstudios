import React from 'react'
import Head from 'next/head'
import { AmplifySignIn, AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'

import AdminThings from '../components/admin-things'
import AdminCategories from '../components/admin-categories'
import AdminQuotes from '../components/admin-quotes'
import AdminDescriptions from '../components/admin-Descriptions'

const Admin = () => {
  const [authState, setAuthState] = React.useState(AuthState.SignIn)
  const [user, setUser] = React.useState()

  const onAuthUIStateChange = (nextAuthState, authData) => {
    setAuthState(nextAuthState)
    setUser(authData)
  }

  return authState === AuthState.SignedIn && user ? (
    <>
      <div className="container">
        <Head>
          <title>Admin | Kevin Utoft | Utoft Studios</title>
          <meta
            property="og:title"
            content="Admin | Kevin Utoft | Utoft Studios"
          />
        </Head>
        <Header></Header>
        <Main>
          <AdminThings />
          <AdminCategories />
          <AdminQuotes />
          <AdminDescriptions />
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
          .cta-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 10px;
          }
          .textinput {
            width: 100%;
            display: block;
            padding: 20px;
            border-color: #dbdbdb;
            border-width: 1px;
          }
          .textarea {
            width: 100%;
            height: 200px;
            display: block;
            padding: 20px;
            border-color: #dbdbdb;
            border-width: 1px;
          }
        `}
      </style>
    </>
  ) : (
    <>
      <div className="container">
        <AmplifyAuthenticator handleAuthStateChange={onAuthUIStateChange}>
          <AmplifySignIn hideSignUp={true} slot="sign-in" />
        </AmplifyAuthenticator>
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
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Admin
