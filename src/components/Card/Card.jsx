import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export function Card({ img, imgAlt, title, description, price, slug }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardFront}>
				<div>
					<img src={img} className={styles.cardFrontImage} alt={imgAlt} />
				</div>
				<div className={styles.cardFrontInfo}>
					<h3 className={styles.cardFrontTitle}>{title}</h3>
				</div>
			</div>
			<div className={styles.cardBack}>
				<img src={img} className={styles.cardBackImage} alt={imgAlt} />
				<h3 className={styles.cardBackTitle}>{title}</h3>
				<p className={styles.cardBackDescription}>{description}</p>
				<p className={styles.cardBackPrice}>{price} zł</p>
				<Link to={`/kursy/${slug}`} className={styles.button}>
					sprawdź szczegóły
				</Link>
			</div>
		</div>
	);
}
