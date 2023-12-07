// components/FixedHeader.js
import React, { useState, useEffect } from 'react';
import styles from './FixedHeader.module.css';

const FixedHeader = ({ title }) => {

  return (
    <header className={styles.fixedHeader} >
      <img src="/phone.png" alt="Phone" className={styles.logo}/>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default FixedHeader;

