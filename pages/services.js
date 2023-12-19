import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const ServicesPage = () => {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <div className="container">
      <Head>
        <title>Services - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>Unlocking Opportunities</h1>     
                <h2>Explore the Range of Services at Appoint One</h2>
                <p>Welcome to Appoint One’s service page, where we invite you to delve into a world of possibilities and solutions. 
                    Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p> 
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
     
      <div className="contentContainer">
        
      
        <div className="innerContainer">
        <button className="round-button" onClick={() => navigateTo('/contact')}>Employee Support</button> 
        </div>
    </div>
          <div className="contentContainer">
          <div className="innerContainer">
            
            <button className="round-button" onClick={() => navigateTo('/mediation')}>Mediation</button>  
           
    
          </div>
          <div className="innerContainer">
          <button className="round-button" onClick={() => navigateTo('/contact')}>Workplace Relations</button>  
          </div>
        </div> 
        <div className="contentContainer">
          <div className="innerContainer">
          <button className="round-button" onClick={() => navigateTo('/contact')}>Career Councelling</button>  
          </div>
          <div className="innerContainer">
          <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation</button>  
           
          </div>
        </div>
        <div className="greenContainer">
          <div className="innerContainer">
            <h2>Employee Support</h2>
            <p>Are you an employee with a work place issue and do not know where to turn or what to do next?  Claire will work with you to understand what is happening for you?  With empathy and understanding she will guide you to see all angles to any workplace issue or stress and advice on a course of action with your best interests at the fore.  With a solution focused mindset, HR expertise and a common sense practical approach Claire will guide you to clarity of your situation.</p>
            <button className="round-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
          </div>
          </div>
          
        <div className="lightGreenContainer">
          <div className="innerContainer">
              <p> Questions?</p>
              <h2>Call Now</h2>
              <p>Ready to take the next step? Call now and let’s embark on your journey to empowerment and resolution.</p>
              <h2>+353 (0)83 4400999</h2>
              <button className="round-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>  
          </div>
          <div className="innerContainer">
            <img className="imgs" src="/images/AONEpc.png" alt="Team"/>
          </div>
       </div>

      </main>
      
    </div>
  );
};

export default ServicesPage;