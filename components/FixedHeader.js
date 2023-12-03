// components/FixedHeader.js
import React from 'react';
import styles from '../styles/FixedHeader.module.css';

const FixedHeader = ({ title }) => {
  return (
    <header className={styles.fixedHeader}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default FixedHeader;