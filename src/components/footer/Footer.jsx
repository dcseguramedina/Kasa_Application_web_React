//Internal libraries
import React from 'react';

//Import components
import LogoMonochrome from '../logoB&W/LogoB&W';
import Copyright from '../copyright/Copyright';

//Import styles
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
        <LogoMonochrome />
        <Copyright />
    </footer>
  );
}

export default Footer;