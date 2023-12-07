// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navigateTo = (path) => {
    router.push(path);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;

      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsHeaderAtTop(isScrollingUp || currentScrollPos === 20);

      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      // Ensure that the code runs only in the browser, not during server-side rendering
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <header className={`${styles.scrollableHeader} ${isHeaderAtTop ? styles.atTop : ''}`}>
      <h1 className={styles.title}>{title}</h1>
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



