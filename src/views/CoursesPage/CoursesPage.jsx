import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { coursesData } from '../../constants/coursesData';
import styles from './CoursesPage.module.css';

export function CoursesPage() {
	const { name } = useParams();
	const course = coursesData.find((c) => c.slug === name);

	if (!course) {
		return <h2>Nie znaleziono trenera</h2>;
	}
	return (
		<Layout>
			<main className={styles.coursesPage}>
				<Wrapper>
					<h2>{course.name}</h2>
				</Wrapper>
			</main>
		</Layout>
	);
}
