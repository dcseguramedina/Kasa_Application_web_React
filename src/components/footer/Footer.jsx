// Internal libraries
import React from 'react';
import logo from '../../assets/logoB&W.png';

// Import components
import Logo from '../logo/Logo';
import Copyright from '../copyright/Copyright';

// Import styles
import styles from './Footer.module.css';

// Create Footer component
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo
          image={logo}
          description={`Logo de kasa en noir et blanc`}
        />
      </div>
      <div className={styles.copyright}>
        <Copyright
          content={`© 2020 Kasa. All rights reserved`}
        />
      </div>        
    </footer>
  );
}