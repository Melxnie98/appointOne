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
      <div className="overlay">
        <div className="fiftyContainer">
            <h1>Unlocking Opportunities</h1>
        </div>
        <div className="fiftyContainer">
            <h2>Explore the Range of Services at Appoint One</h2>
        <p>Welcome to Appoint One’s service page, where we invite you to delve into a world of possibilities and solutions. Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p>
        </div>
        </div>
      </div>

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;