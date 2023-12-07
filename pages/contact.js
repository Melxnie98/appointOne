import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'

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
     
    </div>
  );
};

export default ContactPage;