// components/FixedHeader.js
import React, { useState, useEffect } from 'react';
import styles from './FixedHeader.module.css';

const FixedHeader = ({ title }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const header = document.getElementById('fixed-header');

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the header
        header.style.top = '0';
      } else {
        // Scrolling down, hide the header
        header.style.top = '-50px'; // Adjust the value based on the height of your header
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header id="fixed-header" className={styles.fixedHeader}>
      <h1 className={styles.title}>{title}</h1>
      {/* Add other content for your header here */}
    </header>
  );
};

export default FixedHeader;
