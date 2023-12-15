// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
    // Close the menu after navigation (optional)
    setMenuOpen(false);
  };

  useEffect(() => {
    // Check the screen size on initial load and on resize
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.scrollableHeader}>
      <div className={styles.navigation}>
      <div className={styles.headerContent}>
        
        
        
        <img src="/images/HeadImg.png" alt="Logo" className={styles.logo} onClick={() => navigateTo('/index')} />
          {/* Show burger icon only on small screens */}
          {isSmallScreen && (
             <img src="/images/menu.svg" className={styles.burgerIcon} onClick={toggleMenu}></img>
            
          )}

          {/* Show regular navigation items on larger screens */}
          {!isSmallScreen && (
            <>
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
            </>
          )}

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
