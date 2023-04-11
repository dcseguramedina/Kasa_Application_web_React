//Internal libraries
import React from 'react';
import datas from '../../data/data.js';
import Thumb from '../gallery/Thumb';

//Import styles
import styles from './Gallery.module.css';

function Gallery() {
  return (
    <section className={styles.gallery}>
      {datas.map((data) => {
        return (
          <Thumb
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </section>
  );
}

export default Gallery;