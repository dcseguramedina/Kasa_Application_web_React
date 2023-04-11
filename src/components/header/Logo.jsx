//Internal libraries
import React from 'react';
import logo from '../../assets/logo.png';

//Import styles
import styles from './Logo.module.css';


function Logo() {
  return (    
      <img className={styles.logo} src={logo} alt="Logo de Kasa" />
  );
}

export default Logo;