import React from 'react';
import Footer from '@components/Footer'
import Head from 'next/head'
import ScrollableHeader from '@components/ScrollableHeader';

const CommitmentPage = () => {
  const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <div className="container">

      <Head>
        <title>Our Commitment - Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
      
      <div className="headerCardContainer">
        <div className="overlay">
          <div className="fiftyContainer">
          <h1>Pricing</h1>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="innerContainer">
           <img className="imgs" src="/images/transformations.png" alt="Team"/>
          </div>
          <div className="innerContainer">
            <h2>Our Commitment To Excellence And Transformation</h2>
            <p>At Appoint One, we are dedicated to delivering excellence in every aspect of our service. With over 30 years of experience in Human Resources, Careers Coaching, and Mediation, we have honed our expertise to guide you on your journey to personal and professional growth. Our commitment to compassion, integrity, and empathy forms the foundation of our approach. Whether you seek resolution through mediation, career development guidance, or HR solutions, our team is here to provide unwavering support. Your success is our success, and we look forward to partnering with you in achieving your goals.</p>
            <p>Your success is our ultimate reward, and we are committed to being your dedicated partner on your journey to empowerment and resolution. With Appoint One, you’re not just a client; you’re a valued part of our community, and we look forward to embarking on this transformative journey with you.</p>
          </div>
        </div>

      </main>
    
    </div>
  );
};

export default CommitmentPage;