// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
    // Close the menu after navigation (optional)
    setMenuOpen(false);
  };

  return (
    <header className={styles.scrollableHeader}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
        <img src="/images/HeadImg.png" alt="Logo" className={styles.logo} onClick={() => navigateTo('/index')} />
        
        <div className={styles.topnav}>
          <a className={styles.active} href="#home">
            Logo
          </a>
          <div id="myLinks" className={isMenuOpen ? styles.show : ''}>
            <a onClick={() => navigateTo('/index')} href="#home">
              Home
            </a>
            <a onClick={() => navigateTo('/services')} href="#services">
              Services
            </a>
            <a onClick={() => navigateTo('/about')} href="#about">
              About Us
            </a>
            <a onClick={() => navigateTo('/pricing')} href="#pricing">
              Pricing
            </a>
            <a onClick={() => navigateTo('/contact')} href="#contact">
              Contact Us
            </a>
          </div>
          <a className={styles.icon} onClick={toggleMenu}>
            &#9776;
          </a>
        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;



