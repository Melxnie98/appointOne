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
  function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
      tab.style.display = 'none';
    }
  
    document.getElementById(tabName).style.display = 'block';
  }
  return (
    <div className="container">
      <Head>
        <title>Services - Appoint One</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      
      <div className="servicesContainer">
        <div className="overlay">
            <div className="sixtyFiveContainer">
                <h1>Unlocking Opportunities</h1>     
                <h2>Explore the Range of Services at Appoint One</h2>
                <p>Welcome to Appoint One’s service page, where we invite you to delve into a world of possibilities and solutions. 
                    Our commitment to excellence and transformation is reflected in the comprehensive array of services we offer.</p> 
                <button className="green-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
            </div>
        </div>
      </div>
      <div className="contentContainer">
      <div class="tab-container">
    <button class="tab" onclick="openTab('tab1')">Tab 1</button>
    <button class="tab" onclick="openTab('tab2')">Tab 2</button>
    <button class="tab" onclick="openTab('tab3')">Tab 3</button>

    <div id="tab1" class="tab-content">
      <h2>Tab 1 Content</h2>
      <p>This is the content for Tab 1.</p>
    </div>

    <div id="tab2" class="tab-content">
      <h2>Tab 2 Content</h2>
      <p>This is the content for Tab 2.</p>
    </div>

    <div id="tab3" class="tab-content">
      <h2>Tab 3 Content</h2>
      <p>This is the content for Tab 3.</p>
    </div>
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
            <img className="imgs" src="/images/AONEpc.png" alt="Team"/>
          </div>
       </div>

      </main>
      
    </div>
  );
};

export default ServicesPage;