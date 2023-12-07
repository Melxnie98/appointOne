import { useRouter } from 'next/router';
import React from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <header className={styles.scrollableHeader}>
      <h1 className={styles.title}>{title}</h1>
      <img src="/HeadImg.png" alt="Logo" className={styles.logo} />
        <div className={styles.navigation}>
          <div className={styles.navItem}onClick={() => navigateTo('/index')}>Home</div>
          <div className={styles.navItem}onClick={() => navigateTo('/services')}>Services</div>
          <div className={styles.navItem}onClick={() => navigateTo('/about')}>About Us</div>
          <div className={styles.navItem}>Pricing</div>
          <div className={styles.navItem}>Contact Us</div>
        </div>
    </header>
  );
};

export default ScrollableHeader;