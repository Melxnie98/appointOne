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
        <title>Services - Appoint One</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div className="servicesContainer">
          <div className="overlay">
            <div className="sixtyFiveContainer">
              <h1>Unlocking Opportunities</h1>
              <h2>Explore the Range of Services at Appoint One</h2>
              <p>Welcome to Appoint One’s service page, where we invite you to delve into a world of possibilities and solutions. Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p>
              <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
          </div>
        </div>

        <div className="contentContainer">
          <div className="tab-container">
            <div
              className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => showTab('tab1')}
            >
              Tab 1
            </div>
            <div
              className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => showTab('tab2')}
            >
              Tab 2
            </div>
            <div
              className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => showTab('tab3')}
            >
              Tab 3
            </div>
          </div>

          <div className="tab-content" id="tab1" style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
            <p>Content for Tab 1 goes here.</p>
          </div>

          <div className="tab-content" id="tab2" style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
            <p>Content for Tab 2 goes here.</p>
          </div>

          <div className="tab-content" id="tab3" style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}>
            <p>Content for Tab 3 goes here.</p>
          </div>
        </div>

        <div className="contentContainer">
          <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/employeeSupport')}>Employee Support</button>
          </div>
          <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/mediation')}>Mediation</button>
          </div>
          <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/workplace')}>Workplace Relations</button>
          </div>
          <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/councelling')}>Career Councelling</button>
          </div>
          <div className="innerContainer">
            <button className="round-button" onClick={() => navigateTo('/facilitation')}>Facilitation</button>
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
