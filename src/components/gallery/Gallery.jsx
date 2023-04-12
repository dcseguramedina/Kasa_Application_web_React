//Internal libraries
import React from 'react';
import datas from '../../data/data.js';
import Thumb from '../gallery/Thumb';

//Import styles
import styles from './Gallery.module.css';

function Gallery() {
  const mapdata = datas.map((data) => {
    return (
      <Thumb
        key={data.id}
        id={data.id}
        title={data.title}
        cover={data.cover}
      />
    );
  })

  return (
    <main className={styles.gallery}>
      {mapdata}
    </main>
  );
}

export default Gallery;