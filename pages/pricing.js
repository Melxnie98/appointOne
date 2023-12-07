import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';

const PricingPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Pricing - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <ScrollableHeader />
      <div className="cardContainer">
        <div className="overlay">
          <div className="fiftyContainer">
          <h1>Pricing</h1>
          </div>
        </div>
      </div>

        <p className="description">
          Pricing <code>pages/pricing.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;