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
        <title>Appoint One</title>
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
            <h4 className="greenFont">About Appoint One</h4>
            <h2>Empowering Your Journey with Compassion and Expertise</h2>
            <p>At Appoint One, we’re more than just a consultancy; we’re your dedicated partner in personal and professional growth.</p>

            <p>Founded by Claire Hurley, a seasoned expert with over 30 years of experience in Human Resources, Careers Coaching, and Mediation, our mission is to empower individuals like you.</p>

            <p>With a strong foundation of compassion, integrity, and empathy, we provide tailored solutions to help you navigate career complexities, resolve workplace challenges, and optimize HR strategies.</p>

            <p>Our commitment to your success is unwavering, and we’re here to guide you on a transformative journey towards empowerment and resolution.</p>
          </div>
            <div className="lilContainer">
              <h3>Schedule A Free Consultation</h3>
              <p>Email us for more information and one of our counselors will call you to go over our programs.</p>
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
