import { Card } from '../Card/Card';
import { Wrapper } from '../Wrapper/Wrapper';
import { coursesData } from '../../constants/coursesData';
import pawn from '../../assets/pawn.webp'
import styles from './OurCourses.module.css';

export function OurCourses() {
	return (
		<section className={styles.ourCourses}>
			<Wrapper>
				<div className={styles.ourCoursesHeading}>
					<img src={pawn} alt="Pionek szachowy" />
					<h2>Nasze Kursy</h2>
				</div>
				<div className={styles.cards}>
					{coursesData.map((course) => (
						<Card
							key={course.id}
							img={course.image}
							slug={course.slug}
							imgAlt={course.imgAlt}
							title={course.name}
							price={course.price}
							description={course.shortDescription}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	);
}
