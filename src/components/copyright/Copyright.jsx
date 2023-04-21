// Internal libraries
import React from 'react';

// Import styles
import styles from './Copyright.module.css';

// Create Copyright component
export default function Copyright({content}) {
  return (    
    <p className={styles.copyright}>{content}</p>
);
}