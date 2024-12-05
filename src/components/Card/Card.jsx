import styles from './Card.module.css';

import hallowenGambit from '../../assets/hallowen-gambit.svg';

export function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.cardFront}>
				<div>
					<img
						src={hallowenGambit}
						className={styles.cardFrontImage}
						alt='Król i skoczek w asyście pionów'
					/>
				</div>
				<div className={styles.cardFrontInfo}>
					<h3 className={styles.cardFrontTitle}>Kurs Hallowen Gambit</h3>
				</div>
			</div>
			<div className={styles.cardBack}>
				<img
					src={hallowenGambit}
					className={styles.cardBackImage}
					alt='Król i skoczek w asyście pionów'
				/>
				<h3 className={styles.cardBackTitle}>Kurs Hallowen Gambit</h3>
				<p className={styles.cardBackDescription}>
					W tym kursie dowiesz się wszystkich informacji, które pozwolą Ci
					odnaleźć się w każdej sytuacji związanej z Halloween Gambit. Kurs dla
					szachistów na każdym poziomie.
				</p>
				<p className={styles.cardBackPrice}>99 zł</p>
				<button className={styles.button}>sprawdź szczegóły</button>
			</div>
		</div>
	);
}
