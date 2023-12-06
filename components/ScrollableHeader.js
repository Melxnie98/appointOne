import React from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  return (
    <header className={styles.scrollableHeader}>
      <h1 className={styles.title}>{title}</h1>
      <img src="/HeadImg.png" alt="Logo" className={styles.logo} />
        <div className={styles.navigation}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>About</div>
          <div className={styles.navItem}>Services</div>
          <div className={styles.navItem}>Contact</div>
        </div>
    </header>
  );
};

export default ScrollableHeader;