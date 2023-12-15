import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  useEffect(() => {
    // Add event listener logic here
    const burgerIcon = document.getElementById('burgerIcon');
    const navigation = document.querySelector(`.${styles.navigation}`);

    const toggleNavigation = () => {
      navigation.classList.toggle(`${styles.active}`);
    };

    burgerIcon.addEventListener('click', toggleNavigation);

    // Cleanup the event listener when the component is unmounted
    return () => {
      burgerIcon.removeEventListener('click', toggleNavigation);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <header className={styles.scrollableHeader}>
      <div className={styles.headerContent}>
        <div className={styles.navigation}>
          <h1 className={styles.title}>{title}</h1>
          <img src="/images/HeadImg.png" alt="Logo" className={styles.logo} onClick={() => navigateTo('/index')} />

          <div className={styles.navItem} onClick={() => navigateTo('/index')}>
            Home
          </div>
          <div className={styles.navItem} onClick={() => navigateTo('/services')}>
            Services
          </div>
          <div className={styles.navItem} onClick={() => navigateTo('/about')}>
            About Us
          </div>
          <div className={styles.navItem} onClick={() => navigateTo('/pricing')}>
            Pricing
          </div>
          <div className={styles.navItem} onClick={() => navigateTo('/contact')}>
            Contact Us
          </div>
          <div className={`${styles.navItem} ${styles.burgerIcon}`} id="burgerIcon">
            &#9776;
          </div>
        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;



