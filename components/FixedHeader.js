// components/FixedHeader.js
import React, { useState, useEffect } from 'react';
import styles from './FixedHeader.module.css';

const FixedHeader = ({ title }) => {
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsHeaderAtTop(isScrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <header className={`${styles.fixedHeader} ${isHeaderAtTop ? styles.atTop : ''}`}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default FixedHeader;

