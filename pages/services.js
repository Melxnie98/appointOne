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
  return (
    <div className="container">
      <Head>
        <title>Services - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
        <h2>Mediation</h2>
        <p>Mediation is defined by the Meditation Act 2017 as ‘A confidential, facilitative and voluntary process in which parties to a dispute, with the assistance of a mediator , attempt to reach a mutually acceptable agreement to resolve the dispute’</p>
        <p>Claire is an accredited mediator with the Mediators Institute Ireland. The practice of Appoint one is bound by the Mediation Act 2017 and the Mediators Institute Ireland Code of Practice.</p>
        <p>The aim of mediation is to assist the client and /or parties to prevent or resolve a broad range of disputes or conflicts within a variety of settings and to facilitate improvement to future relationships.</p>
      </div>
      <h2>Available for all mediation needs with particular focus on:</h2>
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
            <button className="round-button" onClick={() => navigateTo('/mediation')}>mediation</button>  
            <button className="round-button" onClick={() => navigateTo('/contact')}>Workplace Relations</button>  
            <button className="round-button" onClick={() => navigateTo('/contact')}>Career Councelling</button>  
            <button className="round-button" onClick={() => navigateTo('/contact')}>Facilitation</button>  
            <button className="round-button" onClick={() => navigateTo('/contact')}>Employee Support</button>  
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
        <div className="greenContainer">
          <div className="innerContainer">
            <h2>Employee Support</h2>
            <p>Are you an employee with a work place issue and do not know where to turn or what to do next?  Claire will work with you to understand what is happening for you?  With empathy and understanding she will guide you to see all angles to any workplace issue or stress and advice on a course of action with your best interests at the fore.  With a solution focused mindset, HR expertise and a common sense practical approach Claire will guide you to clarity of your situation.</p>
            <button className="round-button" onClick={() => navigateTo('/contact')}>Book an Appointment</button>
          </div>
          <div className="innerContainer">
            <h2>Facilitation</h2>
            <p>Through my experience, I’ve orchestrated highly effective gatherings that harmonize education, state agencies, and industry on a large scale. My track record includes skillfully managing these meetings, where I’ve consistently demonstrated a unique talent for facilitating dialogue that extracts the maximum value from each interaction. I have a proven ability to assemble disparate groups and individuals who were previously unacquainted and transform them into cohesive and productive working teams. If you’re seeking facilitation services that can unite diverse stakeholders and foster collaborative, successful outcomes, I have the expertise you need. </p>
            <ul>
                <li>Facilitate meetings </li>
                <li>Generate attendees for meetings and events</li>
                <li>Facilitate workshops</li>
                <li>Facilitate network events</li>
            </ul>
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