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
        <title>Services - beepboop</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div className="servicesContainer">
          <div className="overlay">
            <div className="sixtyFiveContainer">
              <h1>beep</h1>
              <h2>beep boop beep boop beep boop</h2>
              <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
              <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
          </div>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => showTab('tab1')}
          >
            beep
          </div>
          <div
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => showTab('tab2')}
          >
           boop
          </div>
          <div
            className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => showTab('tab3')}
          >
            beepboop
          </div>
          <div
            className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => showTab('tab4')}
          >
            boopbeep
          </div>
          <div
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
            onClick={() => showTab('tab5')}
          >
            beepboopbeep
          </div>
        </div>

        <div className="contentContainer">
          <div className="tab-content" id="tab1" style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
          <div className="innerContainer">
            <h2>boop</h2>
              <p>beep boop beep boop beep boop</p>
              <button className="round-button" onClick={() => navigateTo('/employeeSupport')}> More Information</button>
            </div>
          </div>
          <div className="tab-content" id="tab2" style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
            <div>
            <h2>beep</h2>
              <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
            </div>
            <div className="innerContainer">
              <button className="round-button" onClick={() => navigateTo('/mediation')}> More Information</button>
            </div>
          </div>

          <div className="tab-content" id="tab3" style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}>
          <h2>beepboop</h2>
          beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop
            
            <div className="innerContainer">
                <button className="round-button" onClick={() => navigateTo('/workplace')}>More Information</button>  
            </div>
        </div>

        
          <div className="tab-content" id="tab4" style={{ display: activeTab === 'tab4' ? 'block' : 'none' }}>
          <div className="contentContainer">
          <h2>boopbeep</h2>
        <p>beep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boopbeep boop beep boop beep boop</p>
        
            <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/councelling')}>More Information</button>
          </div>
        </div>
        
          </div>
          <div className="tab-content" id="tab5" style={{ display: activeTab === 'tab5' ? 'block' : 'none' }}>
          <h2>beepboopbeep</h2>
            <p>Through my experience, I’ve orchestrated highly effective gatherings that harmonize education, state agencies, and industry on a large scale. My track record includes skillfully managing these meetings, where I’ve consistently demonstrated a unique talent for facilitating dialogue that extracts the maximum value from each interaction. I have a proven ability to assemble disparate groups and individuals who were previously unacquainted and transform them into cohesive and productive working teams. If you’re seeking facilitation services that can unite diverse stakeholders and foster collaborative, successful outcomes, I have the expertise you need. </p>
            
            <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/facilitation')}>More Information</button>
          </div>
          </div>
        </div>

        <div className="lightGreenContainer">
          <div className="innerContainer">
            <p> Questions?</p>
            <h2>Call Now</h2>
            <p>BEEPBOOPY BOOPY BEEPY BEEP BOOP BOOPYBEEP</p>
            <h2>+353 (0)83 1381137</h2>
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

