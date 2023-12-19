import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';
import ContactForm from '../components/ContactForm';
import styles from '../components/ContactForm.module.css';

const ContactPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Contact - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      <div className="headerCardContainer">
        <div className="overlay">
          <div className="fiftyContainer">
          <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        
        <div className="fiftyGreenContainer">
          <h2>Get in touch.</h2>
          </div>
        <ContactForm className="fiftyGreenContainer" />
      </div>

      
      <div className="greenContainer">
      <h2>" As I live each day may it be my goal to encourage one mind and inspire one soul. As I live each day may I do my part to make one difference and touch one heart "</h2>
      </div>
      </main>
     
    </div>
  );
};

export default ContactPage;