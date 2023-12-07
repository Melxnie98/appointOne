import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'

const ServicesPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Services - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="servicesContainer">
        <h1>Unlocking Opportunities</h1>
        Explore the Range of Services at Appoint One
        <p>Welcome to Appoint One’s service page, where we invite you to delve into a world of possibilities and solutions. Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p>
      </div>

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;