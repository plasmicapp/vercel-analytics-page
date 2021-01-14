import Head from 'next/head'
import React from 'react'
import AnalyticsPageContent from '../components/AnalyticsPageContent'
import VercelPageShell from '../components/VercelPageShell'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VercelPageShell>
        <AnalyticsPageContent />
      </VercelPageShell>
    </>
  )
}
