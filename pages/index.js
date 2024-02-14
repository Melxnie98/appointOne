import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


export default function Home() {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <div className="container">
      <Head>
        <title>beep boop site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <div className="greenContainer">
          <img className="innerContainer" src="/images/team.png" alt="Team"/>
          <div className="innerContainer">
            <h1>beeeep</h1>
            <p>boooop </p>
            <div className="greenContainer">
              <button className="round-button" onClick={() => navigateTo('/services')}>Our Services</button>
              <button className="round-button" onClick={() => navigateTo('/contact')}>Contact Us</button>
            </div>
          </div> 
        </div>
        <div className="cardContainer">
          <div className="overlay">
           <div className="sixtyFiveContainer">
            <h1>beeeep</h1>
          </div>
          <div className="sixtyFiveContainer">
           <p>beep boop beep boop beep boop </p>
          </div>
        </div>
        </div>
        <div className="greenContainer">
          <div className="contentContainer">
            <div className="innerContainer">
              <h2>boop</h2>
              <p>beep boop beep boop beep boop</p>
            </div>
            <div className="innerContainer">
              <h2>beep</h2>
              <p>beep boop beep boop beep boop </p>
            </div>
          </div>
          <div className="contentContainer">
            <div className="innerContainer">
              <h2>boop</h2>
              <p>beep boop beep boop beep boop</p>
            </div>
            <div className="innerContainer">
              <h2>beep</h2>
              <p>beep boop beep boop beep boop</p>
            </div>
          </div> 
        </div>
        <div>
        <div className="contentContainer">
          <div className="lilContainer">
            <h4 className="greenFont">About beep boop</h4>
            <h2>beep boop beep boop beep boop</h2>
            <p>beep boop beep boop beep boopbeep boop beep boop beep boop</p>

            <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>

            <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
          </div>
            <div className="lilContainer">
              <h3>boop</h3>
              <p>beep boop beep boop beep boop.</p>
              <div className="contentContainer">
              <button className="green-button" onClick={() => navigateTo('/services')}>Our Services</button>
              <button className="green-button" onClick={() => navigateTo('/contact')}>Contact Us</button>
            </div> 
          </div>
          </div>
        
        </div>
      </main>
   
    </div>
  )
}
