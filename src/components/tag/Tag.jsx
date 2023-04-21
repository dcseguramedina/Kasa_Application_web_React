// Internal libraries
import React from 'react';

// Import styles
import styles from './Tag.module.css';

// Create Tag component
export default function Tag({content}) {   
    return (          
        <div className={styles.tag}> 
            <p className={styles.tag_text}>{content}</p>
        </div>          
    );      
}