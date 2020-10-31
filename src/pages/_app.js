import Head from 'next/head'
import Amplify from 'aws-amplify'
import awsExports from '../aws-exports'

import { ColorModeProvider } from '../utlis/colorModeContext'

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
      <style jsx global>
        {`
          :root {
            --primary-color: #0a8827;
            --light-primary: #e3e8ea;
            --light-tint: #f0f4f1;
            --light-shade: #dce2e5;
            --dark-primary: #091834;
            --dark-tint: #0b2147;
            --dark-shade: #040924;

            --amplify-primary-color: #0a8827;
            --amplify-primary-tint: #17ac3a;
            --amplify-primary-shade: #05681c;
            --amplify-secondary-color: #130930;
            --amplify-secondary-tint: #1d0c4e;
            --amplify-secondary-shade: #0a041d;
          }
        `}
      </style>
    </>
  )
}
