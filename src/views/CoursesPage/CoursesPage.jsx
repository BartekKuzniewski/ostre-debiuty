import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { coursesData } from '../../constants/coursesData';

import { FaRegEnvelope } from 'react-icons/fa';
import styles from './CoursesPage.module.css';
import { CourseDescription } from '../../components/CourseDescription/CourseDescription';

export function CoursesPage() {
	const { name } = useParams();
	const course = coursesData.find((c) => c.slug === name);

	if (!course) {
		return <h2>Nie znaleziono trenera</h2>;
	}
	return (
		<Layout>
			<section className={styles.coursesPage}>
				<Wrapper>
					<div className={styles.container}>
						<div className={styles.imageSection}>
							<img
								src={course.image}
								alt={course.name}
								className={styles.courseImage}
							/>
							<h2 className={styles.courseTitle}>{course.name}</h2>
						</div>
						<div className={styles.detailsSection}>
							<h3 className={styles.courseHeading}>{course.name}</h3>
							<p className={styles.courseDescription}>{course.courseInfo}</p>
							<div className={styles.purchaseSection}>
								<span className={styles.delivery}>
									<FaRegEnvelope /> Wysyłka natychmiastowa
								</span>
								<span className={styles.price}>{course.price} zł</span>
								<button className={styles.addToCart}>DO KOSZYKA</button>
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
			<CourseDescription course={course} />
		</Layout>
	);
}
