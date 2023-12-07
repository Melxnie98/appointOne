import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'

const PricingPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Pricing - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p className="description">
          Pricing <code>pages/pricing.js</code>
        </p>
      </main>
      
    </div>
  );
};

export default PricingPage;