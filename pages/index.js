import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div></div>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />

      
    </div>
  )
}
