import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const workplacePage = () => {
    const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title>beepityboopboop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>

      <div className="innerContainer">
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>boop</h1>     
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
         
      beep boop beep boop beep boop:
            <ul>
                <li>beep boop beep boop beep boop </li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>

                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>

                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
                <li>beep boop beep boop beep boop</li>
            </ul>
        </div>

        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/mediation')}>beep</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/employeeSupport')}>boop Support</button>  
            </div>
        </div> 
        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/councelling')}>beep Councelling</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/facilitation')}>boop</button>  
            </div>
        </div>
        
      </main>
    </div>
  );
};

export default workplacePage;
