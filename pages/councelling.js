import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const councellingPage = () => {
    const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title>beeep</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>

      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>Carreer Councelling</h1>     
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
      
            
        
      <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/mediation')}>Mediation</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/employeeSupport')}>Employee Support</button>  
            </div>
        </div> 
        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation</button>  
            </div>
        </div>
        
      </main>
      
    </div>
  );
};

export default councellingPage;
