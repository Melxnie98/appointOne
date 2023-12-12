import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';

const ContactPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      

        <p className="description">
          contact <code>pages/contact.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;