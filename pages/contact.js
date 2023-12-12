import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="cardContainer">
        <div className="overlay">
          <div className="fiftyContainer">
          <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      

      <ContactForm />
      </main>
     
    </div>
  );
};

export default ContactPage;