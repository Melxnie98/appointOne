import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';
import { useRouter } from 'next/router';

const AboutPage = () => {
  const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title> About - Appoint One</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <div className="headerCardContainer">
          <div className="overlay">
            <div className="fiftyContainer">
            <h1>About Me</h1>
          </div>
        </div>
      </div>   
      
     
      </main>
    </div>
  );
};

export default AboutPage;