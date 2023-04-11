//Internal libraries
import React from "react";

//Import components
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

//Import styles
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
        <Header /> 
        <Banner />
        <Gallery />      
    </div>
  );
}

export default Home;