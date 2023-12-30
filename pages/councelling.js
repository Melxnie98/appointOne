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
        <title>Carreer Councelling - Appoint one</title>
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
        <p>Are you at a crossroads in your career, seeking to make a change or advance to new heights? Look no further! Appoint One adult career guidance services are designed to empower individuals like you to navigate the complexities of today's job market with confidence. I provide personalized and expert guidance tailored to your unique strengths, interests, and aspirations. Whether you're a seasoned professional looking for a career pivot or a recent graduate taking your first steps into the workforce, I will empower you to chart a clear and rewarding path to success. With guidance, you can discover new opportunities, refine your skills, and make informed decisions that will propel you towards a fulfilling and prosperous career.</p>
        <div className="innerContainer">
            <ul>
                <li>Career Conversations with holistic view of current life circumstances</li>
                <li>Career Exploration</li>
                <li>Job search strategy</li>
                <li>Job application to Interview Preparation Package</li>
                <li>Return to work after prolonged absence</li>
                <li>Interview Preparation</li>
                <li>CV development and management</li>
            </ul>
        </div>
            <div className="innerContainer">
                <ul>
                    <li>Life/Career after retirement</li>
                    <li>Adaptation to changing careers</li>
                    <li>Redundancy/job loss – what next ?</li>
                    <li>Job advancement – how to secure it?</li>
                    <li>Graduate Options</li>
                    <li>Leaving Certificate options</li>
                    <li>Outplacement Support</li>
                </ul>
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
