import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const MediationPage = () => {
    const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title>Mediation - Appoint One</title>
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
      <div className="lightGreenContainer">
        <h2>Mediation</h2>
        <p>Mediation is defined by the Meditation Act 2017 as ‘A confidential, facilitative and voluntary process in which parties to a dispute, with the assistance of a mediator , attempt to reach a mutually acceptable agreement to resolve the dispute’</p>
        <p>FOUNDER is an accredited mediator with the Mediators Institute Ireland. The practice of COMPANY NAME is bound by the Mediation Act 2017 and the Mediators Institute Ireland Code of Practice.</p>
        <p>The aim of mediation is to assist the client and /or parties to prevent or resolve a broad range of disputes or conflicts within a variety of settings and to facilitate improvement to future relationships.</p>
      </div>
      <div className="contentContainer">
        <h2>Available for all mediation needs with particular focus on:</h2>
      </div>
      <div>
            <ul>
                <li>Workplace meditation </li>
                <li>Family mediation</li>
                <li>Separating/Divorce Couples mediation</li>
                <li>Child Inclusive Mediation</li>
                <li>Group/team mediation</li>
                <li>Community mediation</li>
            </ul>
      </div>
        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations </button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/employeeSupport')}>Employee Support</button>  
            </div>
        </div> 
        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/councelling')}>Career Councelling</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation</button>  
            </div>
        </div>

      </main>
    </div>
  );
};

export default MediationPage;