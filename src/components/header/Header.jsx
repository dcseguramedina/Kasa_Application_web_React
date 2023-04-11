//Internal libraries
import React from 'react';

//Import components
import Logo from './Logo';
import Navbar from './Navbar';

//Import styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <Navbar />
    </header>
  );
}

export default Header;