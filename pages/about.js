import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title> About Us - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p className="description">
          About <code>pages/about.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;