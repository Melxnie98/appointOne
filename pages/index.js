import Head from 'next/head'
import FixedHeader from '@components/FixedHeader'
import Footer from '@components/Footer'
import React from 'react';
import { useRouter } from 'next/router';
import ScrollableHeader from '@components/ScrollableHeader';


export default function Home() {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <div className="container">
      <Head>
        <title>Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        <div className="greenContainer">
          <img className="innerContainer" src="/images/team.png" alt="Team"/>
          <div className="innerContainer">
            <h1>Empowerment and Resolution with Claire Hurley</h1>
            <p>Welcome to Appoint One founded by Claire Hurley, a seasoned HR Professional, qualified Mediator and qualified Career Guidance Counsellor. The aim of Appoint One is to partner with individuals, families and organizations to empower them to take the next step, that is theirs to take, in the resolution of a conflict, the provision of a harmonious work culture/environment or make career decisions. </p>
            <div className="greenContainer">
              <button className="round-button" onClick={() => navigateTo('/services')}>Our Services</button>
              <button className="round-button" onClick={() => navigateTo('/contact')}>Contact Us</button>
            </div>
          </div> 
        </div>
        <div className="cardContainer">
          <div className="overlay">
           <div className="sixtyFiveContainer">
            <h1>Why Choose Appoint One</h1>
          </div>
          <div className="sixtyFiveContainer">
           <p>Choose Appoint One for a unique blend of compassion, integrity, and expertise. This is a values  driven organization where respect for the individual and working with discretion, empathy and integrity is foremost.  An authentic empathetic approach ensures personalized guidance for career transitions, conflict resolution, and HR strategy refinement and implementation. </p>
          </div>
        </div>
        </div>
        <div className="greenContainer">
          <div className="contentContainer">
            <div className="innerContainer">
              <h2>Expertise</h2>
              <p>With over 30 years Human Resources Management  experience , coupled with qualifications in Career Guidance Counselling and Mediation, 
                Claire Hurley brings a wealth of expertise to guide you through career complexities, resolve disputes, and support you on HR related topics.</p>
            </div>
            <div className="innerContainer">
              <h2>Compassion and Empathy</h2>
              <p>Claire prioritizes understanding your unique aspirations and challenges, offering unwavering support built on kindness and empathy. </p>
            </div>
          </div>
          <div className="contentContainer">
            <div className="innerContainer">
              <h2>Integrity and Transparency</h2>
              <p>Trust is at the core of all interactions. You can rely on honesty, transparency, and commitment to your best interests. You will be empowered with the knowledge and tools to make informed decisions.</p>
            </div>
            <div className="innerContainer">
              <h2>Tailored Solutions</h2>
              <p>My strengths lie in my capacity for empathy  which allows me to create personalized solutions that fit your needs, whether you're at a career crossroads, facing workplace conflicts, or in need of HR guidance.</p>
            </div>
          </div> 
        </div>
        
        <div className="contentContainer">
          <div className="fiftyContainer">
            <h4 className="greenFont">About Appoint One</h4>
              <h2>Empowering Your Journey with Compassion and Expertise</h2>
              <p>At Appoint One, we’re more than just a consultancy; we’re your dedicated partner in personal and professional growth.</p>

              <p>Founded by Claire Hurley, a seasoned expert with over 30 years of experience in Human Resources, Careers Coaching, and Mediation, our mission is to empower individuals like you.</p>

              <p>With a strong foundation of compassion, integrity, and empathy, we provide tailored solutions to help you navigate career complexities, resolve workplace challenges, and optimize HR strategies.</p>

              <p>Our commitment to your success is unwavering, and we’re here to guide you on a transformative journey towards empowerment and resolution.</p>
            </div>
            <div className="fiftyContainer">
              <h3>Schedule A Free Consultation</h3>
              <p>Email us for more information and one of our counselors will call you to go over our programs.</p>
              <div className="contentContainer">
              <button className="green-button" onClick={() => navigateTo('/services')}>Our Services</button>
              <button className="green-button" onClick={() => navigateTo('/contact')}>Contact Us</button>
            </div> 
          </div>
          
        
        </div>
      </main>
   
    </div>
  )
}
