//Internal libraries
import React from 'react';
import logo from '../../assets/logo.png';

//Import components
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';

//Import styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo
          image={logo}
          description={`Logo de kasa`}
        />
      </div>      
      <Navbar 
        home={`Accueil`}
        about={`À propos`}
      />     
    </header>
  );
}

export default Header;