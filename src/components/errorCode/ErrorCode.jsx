// Internal libraries
import React from 'react';

// Import styles
import styles from './ErrorCode.module.css';

// Create ErrorCode component
export default function ErrorCode({code}) {
  return (    
    <h1 className={styles.error_code}>{code}</h1>     
  );
}