import { Header } from '../../components/Header/Header';
import { KnowUsBetter } from '../../components/KnowUsBetter/KnowUsBetter';
import { Layout } from '../../components/Layout/Layout';
import { OurCourses } from '../../components/OurCourses/OurCourses';
import { TrustUs } from '../../components/TrustUs/TrustUs';

import styles from './HomePage.module.css';

export function HomePage() {
	return (
		<Layout>
			<Header />
			<main className={styles.main}>
				<OurCourses />
				<KnowUsBetter />
				<TrustUs />
			</main>
		</Layout>
	);
}
