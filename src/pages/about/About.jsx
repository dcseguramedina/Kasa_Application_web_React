//Internal libraries
import React from 'react';
import infos from '../../data/info.js';

//Import components
import Banner from '../../components/banner/Banner';
import Dropdown from '../../components/dropdown/Dropdown';

//Import styles
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <Banner />
      <main className={styles.about_dropdown}>
      {infos.map((info) => {
        return (
          <Dropdown
            key={info.id}
            title={info.title}
            content={info.content}
          />
        );
      })}
      </main>
    </div>
  );
}

export default About;