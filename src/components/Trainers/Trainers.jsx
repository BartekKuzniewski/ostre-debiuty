import styles from './Trainers.module.css';

export function Trainers({ img, name, chessTitle, rank, exp }) {
	return (
		<div className={styles.trainers}>
			<div className={styles.trainersImg}>
				<img src={img} alt={name} />
			</div>
			<div className={styles.trainersInfo}>
				<h3 className={styles.trainersName}>{name}</h3>
				<div className={styles.trainersDetails}>
					<div className={styles.trainersChessTitle}>
						<p>Tytuł Szachowy:</p>
						<p>{chessTitle}</p>
					</div>
					<div className={styles.trainersRanking}>
						<p>Ranking FIDE:</p>
						<p>{rank}</p>
					</div>
					<div className={styles.trainersExp}>
						<p>Doświadczenie:</p>
						<p>{exp} lat</p>
					</div>
				</div>
			</div>
		</div>
	);
}
