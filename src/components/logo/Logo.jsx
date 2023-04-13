//Internal libraries
import React from 'react';

//Import styles
import styles from './Logo.module.css';

function Logo({image, description}) {
  return (    
      <img className={styles.image} src={image} alt={description} />
  );
}

export default Logo;