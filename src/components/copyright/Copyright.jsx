//Internal libraries
import React from 'react';

//Import styles
import styles from './Copyright.module.css';

function Copyright({description}) {
  return (    
    <p className={styles.copyright}>{description}</p>
);
}

export default Copyright;