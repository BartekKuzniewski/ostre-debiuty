import { Offer } from '../Offer/Offer';
import { Wrapper } from '../Wrapper/Wrapper';
import { offerData } from '../../constants/offerData';
import styles from './CourseDescription.module.css';

export function CourseDescription({ course }) {
	return (
		<section className={styles.courseDescription}>
			<Wrapper>
				<div>
					<h2>opis kursu</h2>
					<p>{course.description}</p>
				</div>
				<div>
					<h2>co oferujemy</h2>
					<div className={styles.offer}>
						{offerData.map((offer) => (
							<Offer
								key={offer.id}
								icon={offer.icon}
								alt={offer.alt}
								description={offer.description}
							/>
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
