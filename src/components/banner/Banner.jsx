//Internal libraries
import React from 'react';
import { useLocation } from 'react-router-dom';

//Import styles
import styles from './Banner.module.css';

function Banner() {
  const location = useLocation();

  if(location.pathname === '/') {
    return (
    <section className={styles.banner}>
        <div className={styles.banner_underlay}></div>
        <div className={styles.banner_home}></div>                
        <div className={styles.banner_overlay}></div>
        <p className={styles.banner_text}>Chez vous, partout et ailleurs</p>
    </section>
  );
  }  else {
    return (
    <section className={styles.banner}>
        <div className={styles.banner_underlay}></div>
        <div className={styles.banner_about}></div>
        <div className={styles.banner_overlay}></div>      
    </section>
    );
  } 
}

export default Banner;