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
          {/* ... Your existing content */}
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

        {/* ... Your remaining content */}
      </main>
    </div>
  );
};

export default ServicesPage;
