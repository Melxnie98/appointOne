import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const EmployeePage = () => {
  const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title>Employee Support - COMPANY NAME</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
     
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>Employee Support</h1>     
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="greenContainer">
            <div className="innerContainer">
              <p>Are you an employee with a work place issue and do not know where to turn or what to do next?  FOUNDER will work with you to understand what is happening for you?  With empathy and understanding she will guide you to see all angles to any workplace issue or stress and advice on a course of action with your best interests at the fore.  With a solution focused mindset, HR expertise and a common sense practical approach FOUNDER will guide you to clarity of your situation.</p>
              <button className="round-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
          </div>
        </div>
        <div className="contentContainer">
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/mediation')}>Mediation</button>  
            </div>
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations</button>  
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

export default EmployeePage;