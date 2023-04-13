//Internal libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Import styles
import styles from './Card.module.css';

function Card({id, title, cover}) {
	return (
		<Link className={styles.card} to={`/accommodation/${id}`}>
			<img className={styles.card_image} src={cover} alt={title} />
			<div className={styles.card_overlay}></div>
			<h3 className={styles.card_title}>{title}</h3>	
		</Link>
	)
}

export default Card;