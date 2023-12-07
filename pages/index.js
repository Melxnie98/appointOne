import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';


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
            Welcome to Appoint One founded by Claire Hurley, a seasoned HR Professional, qualified Mediator and qualified Career Guidance Counsellor. The aim of Appoint One is to partner with individuals, families and organizations to empower them to take the next step, that is theirs to take, 
  in the resolution of a conflict, the provision of a harmonious work culture/environment or make career decisions.
          </div>
          
        </div>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />

      
    </div>
  )
}
