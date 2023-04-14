//Internal libraries
import React from "react";
import image from '../../assets/banner_home.png'; 

//Import components
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

//Import styles
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
        <Banner          
          image={image}
          alt={`Paysage côtier`}
          description={`Chez vous, partout et ailleurs`} 
        />
        <main>
          <Gallery /> 
        </main>             
    </div>
  );
}

export default Home;