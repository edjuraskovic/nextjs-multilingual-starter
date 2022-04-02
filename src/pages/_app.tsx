import React from 'react'
import NextApp from 'next/app'

import '../styles/globals.css'
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp
