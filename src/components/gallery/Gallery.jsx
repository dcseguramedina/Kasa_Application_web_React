//Internal libraries
import React from 'react';
import datas from '../../data/data.js';
import Card from '../card/Card';

//Import styles
import styles from './Gallery.module.css';

function Gallery() {

  return (
    <section className={styles.gallery}>
      {datas.map((data) => {
        return (
          <Card
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