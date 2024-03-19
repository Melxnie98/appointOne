import React, { useState } from 'react';
import Footer from '@components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';

const ServicesPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tab1');

  const navigateTo = (path) => {
    router.push(path);
  };

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container">
      <Head>
        <title>Services - COMPANY NAME</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div className="servicesContainer">
          <div className="overlay">
            <div className="sixtyFiveContainer">
              <h1>Unlocking Opportunities</h1>
              <h2>Explore the Range of Services at COMPANY NAME</h2>
              <p>Welcome to COMPANY NAME’s service page, where we invite you to delve into a world of possibilities and solutions. Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p>
              <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
          </div>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => showTab('tab1')}
          >
            Employee Support
          </div>
          <div
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => showTab('tab2')}
          >
           Mediation
          </div>
          <div
            className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => showTab('tab3')}
          >
            Workplace Relations
          </div>
          <div
            className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => showTab('tab4')}
          >
            Career Councelling
          </div>
          <div
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
            onClick={() => showTab('tab5')}
          >
            Facillitation
          </div>
        </div>

        <div className="contentContainer">
          <div className="tab-content" id="tab1" style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
          <div className="innerContainer">
            <h2>Employee Support</h2>
              <p>Are you an employee with a work place issue and do not know where to turn or what to do next?  FOUNDER will work with you to understand what is happening for you?  With empathy and understanding she will guide you to see all angles to any workplace issue or stress and advice on a course of action with your best interests at the fore.  With a solution focused mindset, HR expertise and a common sense practical approach FOUNDER will guide you to clarity of your situation.</p>
              <button className="round-button" onClick={() => navigateTo('/employeeSupport')}>Employee Support - More Information</button>
            </div>
          </div>
          <div className="tab-content" id="tab2" style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
            <div>
            <h2>Mediation</h2>
              <p>Mediation is defined by the Meditation Act 2017 as ‘A confidential, facilitative and voluntary process in which parties to a dispute, with the assistance of a mediator , attempt to reach a mutually acceptable agreement to resolve the dispute’</p>
              <p>FOUNDER is an accredited mediator with the Mediators Institute Ireland. The practice of COMPANY NAME is bound by the Mediation Act 2017 and the Mediators Institute Ireland Code of Practice.</p>
              <p>The aim of mediation is to assist the client and /or parties to prevent or resolve a broad range of disputes or conflicts within a variety of settings and to facilitate improvement to future relationships.</p>
            </div>
            <div className="innerContainer">
              <button className="round-button" onClick={() => navigateTo('/mediation')}>Mediation - More Information</button>
            </div>
          </div>

          <div className="tab-content" id="tab3" style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}>
          <h2>Workplace Relations</h2>
          COMPANY NAME provides guidance and expertise to facilitate positive interactions and effective communication within the workplace. The aim is to create a harmonious work environment by helping resolve conflicts, address grievances, and promote a culture of mutual respect and understanding. Support includes advising on HR policies, conducting conflict resolution workshops, and offering assistance in navigating employment-related issues, ultimately fostering a more collaborative and productive workplace.
            
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations - More Information</button>  
            </div>
        </div>

        
          <div className="tab-content" id="tab4" style={{ display: activeTab === 'tab4' ? 'block' : 'none' }}>
          <div className="contentContainer">
          <h2>Career Councelling</h2>
        <p>Are you at a crossroads in your career, seeking to make a change or advance to new heights? Look no further! COMPANY NAME adult career guidance services are designed to empower individuals like you to navigate the complexities of today's job market with confidence. I provide personalized and expert guidance tailored to your unique strengths, interests, and aspirations. Whether you're a seasoned professional looking for a career pivot or a recent graduate taking your first steps into the workforce, I will empower you to chart a clear and rewarding path to success. With guidance, you can discover new opportunities, refine your skills, and make informed decisions that will propel you towards a fulfilling and prosperous career.</p>
        
            <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/councelling')}>Career Councelling - More Information</button>
          </div>
        </div>
        
          </div>
          <div className="tab-content" id="tab5" style={{ display: activeTab === 'tab5' ? 'block' : 'none' }}>
          <h2>Facilitation</h2>
            <p>Through my experience, I’ve orchestrated highly effective gatherings that harmonize education, state agencies, and industry on a large scale. My track record includes skillfully managing these meetings, where I’ve consistently demonstrated a unique talent for facilitating dialogue that extracts the maximum value from each interaction. I have a proven ability to assemble disparate groups and individuals who were previously unacquainted and transform them into cohesive and productive working teams. If you’re seeking facilitation services that can unite diverse stakeholders and foster collaborative, successful outcomes, I have the expertise you need. </p>
            
            <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation - More Information</button>
          </div>
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
            <img className="imgs" src="/images/AONEpc.png" alt="Team" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
