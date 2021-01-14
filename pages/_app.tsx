import React from 'react';
import { ScreenVariantProvider } from '../components/plasmic/vercel_analytics/PlasmicGlobalVariant__Screen';
import '../styles/globals.css'
import 'normalize.css/normalize.css'

function MyApp({ Component, pageProps }) {
  return (
    <ScreenVariantProvider>
      <Component {...pageProps}/>
    </ScreenVariantProvider>
  )
}

export default MyApp
