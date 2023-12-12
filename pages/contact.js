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
      <div className="container">
        <div className="fiftyContainer">We’d love to hear from you! Whether you have questions, need assistance, or want to explore how we can help you achieve your goals, please don’t hesitate to reach out. Your journey to empowerment and resolution begins with a simple conversation. Contact us today, and let’s start this transformative dialogue together</div>
        <div className="fiftyContainer"><ContactForm /></div>
      </div>

      
      <div className="greenContainer">
      <h1>" As I live each day may it be my goal to encourage one mind and inspire one soul. As I live each day may I do my part to make one difference and touch one heart "</h1>
      </div>
      </main>
     
    </div>
  );
};

export default ContactPage;