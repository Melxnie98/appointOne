// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }

  return (
    <header className={styles.scrollableHeader}>
      <img src="/HeadImg.png" alt="Logo" className={styles.logo} onClick={() => navigateTo('/index')}/>
      <div className={styles.navigation}>
        <div className={styles.navItem} onClick={() => navigateTo('/index')}>Home</div>
        <div className={styles.navItem} onClick={() => navigateTo('/services')}>Services</div>
        <div className={styles.navItem} onClick={() => navigateTo('/about')}>About Us</div>
        <div className={styles.navItem} onClick={() => navigateTo('/pricing')}>Pricing</div>
        <div className={styles.navItem} onClick={() => navigateTo('/contact')}>Contact Us</div>
      </div>
    </header>
  );
};


export default ScrollableHeader;



