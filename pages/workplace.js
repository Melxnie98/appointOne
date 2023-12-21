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
        <title>Workplace Relations - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>

      <div className="innerContainer">
      <div className="servicesContainer">
        <div className="overlay">
            <div className="fiftyContainer">
                <h1>Workplace Relations</h1>     
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
         
            Appoint One provides guidance and expertise to facilitate positive interactions and effective communication within the workplace. The aim is to create a harmonious work environment by helping resolve conflicts, address grievances, and promote a culture of mutual respect and understanding. Support includes advising on HR policies, conducting conflict resolution workshops, and offering assistance in navigating employment-related issues, ultimately fostering a more collaborative and productive workplace.
            HR Consultation and Delivery on ……..
            <ul>
                <li>Workplace investigations </li>
                <li>All Employee Relations issues</li>
                <li>Conflict Management</li>
                <li>Management of Disciplinary and Grievance Issues</li>
                <li>Performance Management</li>
                <li>Employee Development</li>

                <li>Employee Retention </li>
                <li>Organization Review and Restructuring</li>
                <li>Redundancy and Redeployment</li>
                <li>Outplacement Services</li>
                <li>Policy and Procedures reviewt</li>
                <li>Contracts of employment</li>

                <li>Succession Planning </li>
                <li>Talent Managementg</li>
                <li>Team facilitation</li>
                <li>Workplace Culture & Wellbeing</li>
                
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
                <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation</button>  
            </div>
        </div>
        
      </main>
    </div>
  );
};

export default workplacePage;
