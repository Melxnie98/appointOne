import React from 'react';
import Footer from '@components/Footer'

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Appoint one</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p className="description">
          About <code>pages/aboutUs.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;