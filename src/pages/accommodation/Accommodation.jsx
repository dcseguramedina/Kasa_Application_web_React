//Internal libraries
import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/data.js';

//Import components
import Carrousel from '../../components/carrousel/Carrousel.jsx';
import Dropdown from '../../components/dropdown/Dropdown.jsx';

//Import styles
import styles from './Accommodation.module.css';

function Accommodation() {

    const id = useParams().id;

    let singleData = datas.find((data) => data.id === id);     

    console.log(singleData.pictures);

        return (           
            <div className={styles.accommodation}>
                <section className={styles.accommodation_carrousel}>
                    <Carrousel
                        title = {singleData.title}
                        pictures={singleData.pictures}
                    />                    
                </section>               
                <main className={styles.accommodation_main}>            
                    <section className={styles.accommodation_info}>
                        <div className={styles.accommodation_info_place}>
                            <h1 className={styles.accommodation_title}>{``}</h1>
                            <h2 className={styles.accommodation_location}>{``}</h2>
                            <div className={styles.accommodation_tags}></div>
                        </div>
                        <div className={styles.accommodation_info_host}>
                            <h2>{``}</h2>
                            <img src="" alt="" />
                            <div></div>
                        </div>
                    </section>      
                    <section className={styles.accommodation_dropdowns}>
                        <div className={styles.accommodation_dropdown}>
                            <Dropdown
                                title={`Description`}
                                content={``}
                            />
                        </div>
                        <div className={styles.accommodation_dropdown}>
                            <Dropdown
                                title={`Équipements`}
                                content={``}
                            />
                        </div>              
                    </section>
                </main>                
            </div>
        );      
}

export default Accommodation;