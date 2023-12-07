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
            Welcome to Appoint One founded by Claire Hurley, a seasoned HR Professional, qualified Mediator and qualified Career Guidance Counsellor. The aim of Appoint One is to partner with individuals, families and organizations to empower them to take the next step, that is theirs to take, in the resolution of a conflict, the provision of a harmonious work culture/environment or make career decisions. 
          </div> 
        </div>
        <div>
          <h1>Why Choose Appoint One</h1>
          Choose Appoint One for a unique blend of compassion, integrity, and expertise. This is a values  driven organization where respect for the individual and working with discretion, empathy and integrity is foremost.  An authentic empathetic approach ensures personalized guidance for career transitions, conflict resolution, and HR strategy refinement and implementation. 

        </div>
        <div>
          <h1>Expertise</h1>
         With over 30 years Human Resources Management  experience , coupled with qualifications in Career Guidance Counselling and Mediation, Claire Hurley brings a wealth of expertise to guide you through career complexities, resolve disputes, and support you on HR related topics.
        </div>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />

      
    </div>
  )
}
