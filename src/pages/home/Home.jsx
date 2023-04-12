//Internal libraries
import React from "react";

//Import components
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

//Import styles
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
        <Banner />
        <Gallery />      
    </div>
  );
}

export default Home;