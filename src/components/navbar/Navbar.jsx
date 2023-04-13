//Internal libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Import styles
import styles from './Navbar.module.css';

function Navbar({home, about}) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>        
        <li className={styles.nav_list_item}>
          <Link to="/">{home}</Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link to="/about">{about}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;