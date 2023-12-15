// components/FixedHeader.js
import React, { useState, useEffect } from 'react';
import styles from './FixedHeader.module.css';

const FixedHeader = ({ title }) => {

  return (
    <header className={styles.fixedHeader} >
       <div className={styles.navigation}>
        <img href="tel:+353834400999" src="/logos/phone.png" alt="Phone" className={styles.icons}/>
        
        <img src="/logos/facebookLogo.png" alt="Facebook"  className={`${styles.navItem} ${styles.icons}`}/>
        <img src="/logos/twitterLogo.png" alt="Twitter"  className={`${styles.navItem} ${styles.icons}`}/>
        <img src="/logos/instagramLogo.png" alt="Instagram" className={`${styles.navItem} ${styles.icons}`}/>
       </div>
      
      
    </header>
  );
};

export default FixedHeader;

