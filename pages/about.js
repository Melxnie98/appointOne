import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title> About Us - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <div className="headerCardContainer">
          <div className="overlay">
            <div className="fiftyContainer">
            <h1>About Me</h1>
          </div>
        </div>
      </div>   
      <div class="contentContainer">
        <h1>Meet Claire Hurley</h1>
        <img className="imgs"src="/images/claire.jpeg" alt="Claire Hurley"/>
        <div className="sixtyFiveContainer">
          <p>I established Appoint One with a clear vision - to provide support and inspiration to individuals and organizations, enabling them to effectively address complex challenges and progress in a positive direction. In so doing, be fulfilled in the work that I do.  My value is in HR problem solving, conflict resolution, mediation and facilitation, employee relations, and career guidance for adults seeking a change. I offer a wide range of services to support positive workplace relations in organizations and will guide employers and employees through difficult work situations be it a grievance, investigation, conflict or complex disciplinary issue. I offer workplace, community and family mediation including child inclusive mediation.  I work with integrity and discretion.  I approach situations with a  solution focused mindset prioritizing trust and transparency of communication. </p>
          <p>I am an accredited Mediator with the Mediators Institute Ireland(MII)  Associate of Chartered Institute Personnel And Development (CIPD) and accredited member of  Institute Guidance Counsellors( IGC).</p>
          <p> My professional journey spans over three decades, during which I have held senior HR roles in both the IT and Medical Device sectors. This substantial experience is complemented by over eight years of dedicated service in the field of career guidance. I have also garnered valuable insights and expertise during my tenure in the public sector, where I occupied regional roles that facilitated collaboration between Industry, Education, and State Agencies. These roles were instrumental in the identification of skills gaps and the implementation of strategies to address them. My strengths and skills have been honed through extensive involvement in change management, organizational restructuring, conflict resolution, facilitation, mediation, and career coaching activities.</p>
          <p>My interests lie in the outdoors kayaking, open water swimming and hillwalking.  Generally love life and approach everything with an optimistic outlook.</p>         
        </div>
      </div>
      </main>
    </div>
  );
};

export default AboutPage;