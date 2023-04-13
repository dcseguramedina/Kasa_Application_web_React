//Internal libraries
import * as React from 'react';

//Import styles
import styles from './ErrorMessage.module.css';

function ErrorMessage({message}) {
  return (    
    <p className={styles.error_message}>{message}</p>      
  );
}

export default ErrorMessage;