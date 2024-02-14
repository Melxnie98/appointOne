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
        <title>beep boop page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
     
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>beep</h1>   
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
      <div className="lightGreenContainer">
        <h2>boop</h2>
        <p>beep boop beep boop beep boopbeep boop beep boop beep boop</p>
      </div>
      <div className="contentContainer">
        <h2>beep boop beep boop beep boop</h2>
      </div>
      <div>
            <ul>
                <li>beep boop beep boop beep boop </li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
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