import { Link } from 'react-router-dom';
import styles from './CoachCard.module.css';

export function CoachCard({ name, fide, title, description, image, slug }) {
	return (
		<Link to={`/trenerzy/${slug}`} className={styles.card}>

			<div className={styles.cardFront}>
				<img src={image} alt={name} className={styles.image} />
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.fide}>FIDE {fide}</p>
				<p className={styles.title}>{title}</p>
			</div>


			<div className={styles.cardBack}>
				<img src={image} alt={name} className={styles.imageBack} />
				<h3 className={styles.nameBack}>{name}</h3>
				<p className={styles.fideBack}>FIDE {fide}</p>
				<p className={styles.titleBack}>{title}</p>
				<p className={styles.descriptionBack}>{description}</p>
			</div>
		</Link>
	);
}
