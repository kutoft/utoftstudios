import Head from 'next/head'
import Amplify from 'aws-amplify'
import awsExports from '../aws-exports'

import { ColorModeProvider } from '../utlis/colorModeContext'
import './style.css'

Amplify.configure(awsExports)

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </>
  )
}
