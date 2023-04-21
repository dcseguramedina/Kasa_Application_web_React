// Internal libraries
import * as React from 'react';

// Import styles
import styles from './ErrorMessage.module.css';

// Create ErrorMessage component
export default function ErrorMessage({message}) {
  return (    
    <p className={styles.error_message}>{message}</p>      
  );
}