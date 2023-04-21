// Internal libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './Return.module.css';

// Create Return component
export default function Return({message}) {
  return (    
    <Link className={styles.return} to="/">
       {message}
    </Link>  
  );
}