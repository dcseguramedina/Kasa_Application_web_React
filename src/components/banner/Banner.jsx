// Internal libraries
import React from 'react';

// Import styles
import styles from './Banner.module.css';

// Create Banner component
export default function Banner({image, alt, description}) {  
    return (
    <section className={styles.banner}>
      <div className={styles.banner_underlay}></div>
      <img className={styles.banner_image}src={image} alt={alt} />            
      <div className={styles.banner_overlay}></div>
      <p className={styles.banner_text}>{description}</p>
    </section>
  );
}