import { Link } from 'react-router-dom';
import styles from './TrainerShowcase.module.css';

export function TrainerShowcase({ name, img, description }) {
	return (
		<Link className={styles.trainerShowcase}>
			<div className={styles.trainerShowcaseImg}>
				<img src={img} alt={name} />
			</div>
			<h3 className={styles.trainerShowcaseName}>{name}</h3>
			<p className={styles.trainerShowcaseDescription}>{description}</p>
		</Link>
	);
}
