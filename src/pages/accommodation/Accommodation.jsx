//Internal libraries
import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/data.js';

//Import components
import Carrousel from '../../components/carrousel/Carrousel.jsx';
import Tag from '../../components/tag/Tag.jsx';
import Rating from '../../components/rating/Rating.jsx';
import Dropdown from '../../components/dropdown/Dropdown.jsx';

//Import styles
import styles from './Accommodation.module.css';

function Accommodation() {

    const id = useParams().id;

    let singleData = datas.find((data) => data.id === id);     

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
                            <h1 className={styles.accommodation_info_place_title}>{singleData.title}</h1>
                            <h2 className={styles.accommodation_info_place_location}>{singleData.location}</h2>
                            <div className={styles.accommodation_info_place_tags}>
                                {singleData.tags.map((tag, index) => {
                                    return (
                                    <Tag
                                        key={index}
                                        content={tag}
                                    />
                                    );
                                })}                             
                            </div>
                        </div>
                        <div className={styles.accommodation_info_host}>
                            <div className={styles.accommodation_info_host_details}>
                                <h2 className={styles.accommodation_info_host_details_name}>{singleData.host.name}</h2>
                                <img className={styles.accommodation_info_host_details_picture} src={singleData.host.picture} alt={singleData.host.name} />
                            </div>
                            <div className={styles.accommodation_info_host_rating}>
                                <Rating
                                    value={singleData.rating}
                                />
                            </div> 
                        </div>                       
                    </section>      
                    <section className={styles.accommodation_dropdown_container}>
                        <div className={styles.accommodation_dropdown}>
                            <Dropdown
                                title={`Description`}
                                content={singleData.description}
                            />
                        </div>
                        <div className={styles.accommodation_dropdown}>
                            <Dropdown
                                title={`Équipements`}
                                content={singleData.equipments}
                            />
                        </div>              
                    </section>
                </main>                
            </div>
        );      
}

export default Accommodation;