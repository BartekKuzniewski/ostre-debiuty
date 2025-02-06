import styles from './Offer.module.css';

export function Offer({ icon, description, alt }) {
	return (
		<div className={styles.offer}>
			<img src={icon} alt={alt} />
			<p>{description}</p>
		</div>	
	);
}
