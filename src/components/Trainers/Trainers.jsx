import bartekImg from '../../assets/bartek.png';
// import igorImg from '../../assets/igor.png';

import styles from './Trainers.module.css';

export function Trainers() {
	return (
		<div className={styles.trainers}>
			<div className={styles.trainersImg}>
				<img src={bartekImg} />
			</div>
			<div className={styles.trainersInfo}>
				<h3 className={styles.trainersName}>Bartosz Rudecki</h3>
				<div className={styles.trainersDetails}>
					<div className={styles.trainersChessTitle}>
						<p>Tytuł Szachowy:</p>
						<p>IM</p>
					</div>
					<div className={styles.trainersRanking}>
						<p>Ranking FIDE:</p>
						<p>2007</p>
					</div>
					<div className={styles.trainersExp}>
						<p>Doświadczenie:</p>
						<p>16 lat</p>
					</div>
				</div>
			</div>
		</div>
	);
}
