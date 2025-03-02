import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Header';
import { KnowUsBetter } from '../../components/KnowUsBetter/KnowUsBetter';
import { Layout } from '../../components/Layout/Layout';
import { OurCourses } from '../../components/OurCourses/OurCourses';
import { Quality } from '../../components/Quality/Quality';
import { TrustUs } from '../../components/TrustUs/TrustUs';

import styles from './HomePage.module.css';

export function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title>Ostre Debiuty - Kursy i Trenerzy Szachowi Online</title>
				<meta
					name='description'
					content='Odkryj najlepsze kursy szachowe online prowadzone przez doświadczonych trenerów i arcymistrzów. Rozwijaj swoje umiejętności z Ostre Debiuty!'
				/>
				<meta
					name='keywords'
					content='szachy, kursy szachowe, trenerzy szachowi, nauka szachów, szachy online, Ostre Debiuty'
				/>
			</Helmet>

			<Header />
			<main className={styles.main}>
				<OurCourses />
				<KnowUsBetter />
				<TrustUs />
				<Quality />
			</main>
		</Layout>
	);
}
