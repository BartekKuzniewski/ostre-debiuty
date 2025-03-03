import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { coachesData } from '../../constants/coachesData';
import { CoachCard } from '../../components/CoachCard/CoachCard';
import { Helmet } from 'react-helmet-async';
import rook from '../../assets/rook.webp';
import styles from './Coaches.module.css';

export function Coaches() {
	return (
		<Layout>
			<Helmet>
				<title>Ostre Debiuty - Poznaj Naszych Trenerów Szachowych</title>
				<meta
					name='description'
					content='Poznaj doświadczonych trenerów szachowych i arcymistrzów, którzy pomogą Ci rozwinąć Twoje umiejętności w Ostrych Debiutach.'
				/>
				<meta
					name='keywords'
					content='trenerzy szachowi, arcymistrzowie, lekcje szachowe, indywidualne treningi, Ostre Debiuty'
				/>
				<meta property='og:title' content='Trenerzy Szachowi - Ostre Debiuty' />
				<meta
					property='og:description'
					content='Poznaj doświadczonych trenerów szachowych i arcymistrzów, którzy pomogą Ci rozwinąć Twoje umiejętności w Ostre Debiuty.'
				/>
				<meta property='og:image' content='URL_DO_ZDJECIA_TRENERA' />
				<meta
					property='og:url'
					content='https://www.ostre-debiuty.pl/trenerzy'
				/>
			</Helmet>
			<main className={styles.coaches}>
				<Wrapper>
					<div className={styles.coachesHeading}>
						<img src={rook} alt='Wieża' />
						<h2>Trenerzy</h2>
					</div>
					<p className={styles.description}>
						Nasz zespół trenerski stanowią Arcymistrzowie szachowi, wielokrotni
						medaliści mistrzostw Polski i świata. Razem z nimi chcemy zapewnić
						Wam jak najlepsze warunki do nauki i rozwoju oraz prowadzić Was po
						coraz wyższych szczeblach szachowego sukcesu.
					</p>
					<div className={styles.grid}>
						{coachesData.map((coach, index) => (
							<CoachCard
								key={index}
								name={coach.name}
								slug={coach.slug}
								fide={coach.fide}
								title={coach.title}
								description={coach.description}
								image={coach.image}
							/>
						))}
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
