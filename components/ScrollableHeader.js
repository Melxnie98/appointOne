import React from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  return (
    <header className={styles.scrollableHeader}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default ScrollableHeader;