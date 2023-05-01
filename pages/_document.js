import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' type='image/x-con' href='/images/logo.svg'/>
        <title>Tech-shop</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
