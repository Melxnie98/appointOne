import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router';

const ServicesPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Services - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
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
            <h2>Community Mediation</h2>
            <p>Community mediation fosters harmony by addressing local conflicts through facilitated dialogue. Mediators identify issues and guide parties toward collaborative solutions, promoting community well-being. This process enhances local resilience and fosters connected, vibrant communities.</p>
        </div>
        <div className="innerContainer">
            <h2>Family Mediation</h2>
            <p>Family mediators work with individuals and families to resolve conflicts related to divorce, child custody and visitation, spousal support, property division, and other family matters. Family mediation aims to minimize the emotional and financial stress associated with family disputes.</p>
        </div>
    </div>
          <div className="contentContainer">
          <div className="innerContainer">
            <h2>Divorce Mediation</h2>
            <p>A subset of family mediation, divorce mediators specifically focus on helping couples navigate the divorce process, including the division of assets, child custody arrangements, and support issues, all while promoting amicable solutions.</p>
          </div>
          <div className="innerContainer">
            <h2>Workplace Mediation</h2>
            <p>Workplace mediators assist in resolving conflicts within a professional setting. This can include disputes between employees, management and staff, or labour and management in a unionized environment. Workplace mediation can help improve workplace relationships and productivity.</p>
          </div>
        </div> 
        <div className="contentContainer">
          <div className="innerContainer">
            <h2>Group/team Mediation</h2>
            <p>Group/team mediation cultivates communication, resolves conflicts, and fortifies team synergy. The mediator identifies issues, facilitates agreements, fostering productivity, and preventing future conflicts for a cohesive team environment.</p>
          </div>
          <div className="innerContainer">
            <h2>Child Inclusive Mediation</h2>
            <p>Child Inclusive Mediation prioritizes children's perspectives in parental disputes, utilizing age-appropriate methods to ensure their voices are heard. The mediator facilitates decisions that promote the child's well-being, enhancing the effectiveness of family mediation by addressing the unique needs and emotions of the children involved. </p>
          </div>
       
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;