import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const MediationPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Mediation - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
     
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>Mediation Services</h1>     
                
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
      <div className="contentContainer">
        <h2>Mediation</h2>
        <p>Mediation is defined by the Meditation Act 2017 as ‘A confidential, facilitative and voluntary process in which parties to a dispute, with the assistance of a mediator , attempt to reach a mutually acceptable agreement to resolve the dispute’</p>
        <p>Claire is an accredited mediator with the Mediators Institute Ireland. The practice of Appoint one is bound by the Mediation Act 2017 and the Mediators Institute Ireland Code of Practice.</p>
        <p>The aim of mediation is to assist the client and /or parties to prevent or resolve a broad range of disputes or conflicts within a variety of settings and to facilitate improvement to future relationships.</p>
      </div>
      <h2>Available for all mediation needs with particular focus on:</h2>
     
            <ul>
                <li>Workplace meditation </li>
                <li>Family mediation</li>
                <li>Separating/Divorce Couples mediation</li>
                <li>Child Inclusive Mediation</li>
                <li>Group/team mediation</li>
                <li>Community mediation</li>
            </ul>
      </main>
    </div>
  );
};

export default MediationPage;