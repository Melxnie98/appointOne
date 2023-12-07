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

        <p className="description">
          Services <code>pages/services.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;