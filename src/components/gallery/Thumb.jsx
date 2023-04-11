//Internal libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Import styles
import styles from './Thumb.module.css';

function Thumb({id, title, cover}) {
	return (
		<Link className={styles.thumb} to={`/accommodation/${id}`}>
			<img className={styles.thumb_image} src={cover} alt={title} />
			<div className={styles.thumb_overlay}></div>
			<h3 className={styles.thumb_title}>{title}</h3>	
		</Link>
	)
}

export default Thumb;