//Internal libraries
import React from 'react';
import logo from '../../assets/logoMonochrome.png';

//Import styles
import styles from './LogoB&W.module.css';

function LogoMonochrome() {
  return (
    <img className={styles.logo_monochrome} src={logo} alt="Logo de Kasa" />
  );
}

export default LogoMonochrome;