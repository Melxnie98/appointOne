import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const ThanksPage = () => {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }

  return (
    <div className="container">
      <Head>
        <title>Thank You - Appoint One</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <div className="servicesContainer">
            <div className="overlay">
                <div className="fiftyContainer">
                    <h1>Thanks for Getting in touch</h1>     
                    <h2>We will reach out to you soon</h2>
                    <button className="green-button" onClick={() => navigateTo('/index')}>Continue browsing</button>
                    
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ThanksPage;