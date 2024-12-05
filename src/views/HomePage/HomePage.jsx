import { Header } from '../../components/Header/Header';
import { Layout } from '../../components/Layout/Layout';
import { OurCourses } from '../../components/OurCourses/OurCourses';

import styles from './HomePage.module.css';

export function HomePage() {
	return (
		<Layout>
			<Header />
			<main className={styles.main}>
				<OurCourses />
			</main>
		</Layout>
	);
}
