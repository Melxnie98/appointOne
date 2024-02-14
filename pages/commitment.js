import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';
import { useRouter } from 'next/router';

const CommitmentPage = () => {
  const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">

      <Head>
        <title>beeeeeep</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      
      <div className="headerCardContainer">
        <div className="overlay">
          <div className="fiftyContainer">
          <h1>beepboop</h1>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="innerContainer">
           <img className="imgs" src="/images/transformations.png" alt="Team"/>
          </div>
          <div className="innerContainer">
            <h2>beep boop beep boop beep boop</h2>
            <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
            <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default CommitmentPage;