import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


const FacilitationPage = () => {
    const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">
      <Head>
        <title>Facilitation - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      
      
      
      <div className="innerContainer">
            <h2>Facilitation</h2>
            <p>Through my experience, I’ve orchestrated highly effective gatherings that harmonize education, state agencies, and industry on a large scale. My track record includes skillfully managing these meetings, where I’ve consistently demonstrated a unique talent for facilitating dialogue that extracts the maximum value from each interaction. I have a proven ability to assemble disparate groups and individuals who were previously unacquainted and transform them into cohesive and productive working teams. If you’re seeking facilitation services that can unite diverse stakeholders and foster collaborative, successful outcomes, I have the expertise you need. </p>
            <ul>
                <li>Facilitate meetings </li>
                <li>Generate attendees for meetings and events</li>
                <li>Facilitate workshops</li>
                <li>Facilitate network events</li>
            </ul>
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
                    <button className="round-button" onClick={() => navigateTo('/councelling')}>Career Councelling</button>  
                </div>
                <div className="innerContainer">
                    <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations</button>  
                </div>
            </div>
        
      

      </main>
      
    </div>
  );
};

export default FacilitationPage;
