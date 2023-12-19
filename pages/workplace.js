import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const workplacePage = () => {
  return (
    <div className="container">
      <Head>
        <title>Workplace Relations - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>

      <div className="innerContainer">
            <h2>Workplace Relations</h2>
            
          </div>
        
      </main>
      
    </div>
  );
};

export default workplacePage;
