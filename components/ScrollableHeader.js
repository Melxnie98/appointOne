// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
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
          <div className={styles.burger-icon} onClick={toggleMenu}>
            &#9776;
          </div>

          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              {/* Dropdown menu items go here */}
              <div onClick={() => navigateTo('/index')}>Home</div>
              <div onClick={() => navigateTo('/services')}>Services</div>
              <div onClick={() => navigateTo('/about')}>About Us</div>
              <div onClick={() => navigateTo('/pricing')}>Pricing</div>
              <div onClick={() => navigateTo('/contact')}>Contact Us</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;



