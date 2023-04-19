//Internal libraries
import React from 'react';

//Import styles
import styles from './Copyright.module.css';

function Copyright({content}) {
  return (    
    <p className={styles.copyright}>{content}</p>
);
}

export default Copyright;