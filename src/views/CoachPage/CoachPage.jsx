import { useParams } from 'react-router-dom';
import { coachesData } from '../../constants/coachesData';
import { Layout } from '../../components/Layout/Layout';
import bishop from '../../assets/bishop.webp';
import styles from './CoachPage.module.css';

export function CoachPage() {
	const { name } = useParams();
	const coach = coachesData.find((c) => c.slug === name);

	if (!coach) {
		return <h2>Nie znaleziono trenera</h2>;
	}

	return (
		<Layout>
			<main className={styles.coachPage}>
				<div className={styles.coachPageHeading}>
					<img src={bishop} alt='Goniec' />
					<h2>{coach.name}</h2>
				</div>
				<div className={styles.coachPageContent}>
					<div className={styles.contentLeft}>
						<img src={coach.image} alt={coach.name} className={styles.image} />
						<h3 className={styles.name}>{coach.name}</h3>
						<p className={styles.fide}>FIDE {coach.fide}</p>
						<p className={styles.title}>{coach.title}</p>
					</div>
					<div className={styles.contentRight}>
						<h3>O Mnie</h3>
						<p>{coach.aboutMe}</p>
						<h3>Jak wygląda lekcja ze mną?</h3>
						<p>{coach.lesson}</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}
