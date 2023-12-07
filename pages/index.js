import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="greenContainer">
          <img src="/team.png" alt="Team"/>
          <div className="Container">
            <h2>Your Trusted Guide for Personal and Professional Growth</h2>
            <h1>Empowerment and Resolution with Claire Hurley</h1>
            <p>Welcome to Appoint One founded by Claire Hurley, a seasoned HR Professional, qualified Mediator and qualified Career Guidance Counsellor. The aim of Appoint One is to partner with individuals, families and organizations to empower them to take the next step, that is theirs to take, in the resolution of a conflict, the provision of a harmonious work culture/environment or make career decisions. </p>
            <button className="round-button" onClick={() => navigateTo('/services')}>Our Services</button>
            <button className="round-button" onClick={() => navigateTo('/contact')}>Contact Us</button>
          </div> 
        </div>
        <div className="cardContainer">
          <div className="overlay">
           <div className="fiftyContainer">
            <h1>Why Choose Appoint One</h1>
          </div>
          <div className="fiftyContainer">
           <p>Choose Appoint One for a unique blend of compassion, integrity, and expertise. This is a values  driven organization where respect for the individual and working with discretion, empathy and integrity is foremost.  An authentic empathetic approach ensures personalized guidance for career transitions, conflict resolution, and HR strategy refinement and implementation. </p>
          </div>
        </div>
        </div>
        <div className="greenContainer">
          <div className="innerContainer">
            <h2>Expertise</h2>
            <p>With over 30 years Human Resources Management  experience , coupled with qualifications in Career Guidance Counselling and Mediation, 
              Claire Hurley brings a wealth of expertise to guide you through career complexities, resolve disputes, and support you on HR related topics.</p>
          </div>
          <div className="innerContainer">
            <h2>Compassion and Empathy</h2>
            <p>Claire prioritizes understanding your unique aspirations and challenges, offering unwavering support built on kindness and empathy. </p>
          </div>
        </div>
        <div className="greenContainer">
          <div className="innerContainer">
            <h2>Integrity and Transparency</h2>
            <p>Trust is at the core of all interactions. You can rely on honesty, transparency, and commitment to your best interests. You will be empowered with the knowledge and tools to make informed decisions.</p>
          </div>
          <div className="innerContainer">
            <h2>Tailored Solutions</h2>
            <p>My strengths lie in my capacity for empathy  which allows me to create personalized solutions that fit your needs, whether you're at a career crossroads, facing workplace conflicts, or in need of HR guidance.</p>
          </div>
        </div>

        
      </main>
      <Footer />

      
    </div>
  )
}
