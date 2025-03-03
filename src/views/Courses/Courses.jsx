import { Card } from '../../components/Card/Card';
import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Helmet } from 'react-helmet-async';
import { coursesData } from '../../constants/coursesData';
import rook from '../../assets/rook.webp';

import styles from './Courses.module.css';

export function Courses() {
	return (
		<Layout>
			<Helmet>
				<title>Ostre Debiuty - Rozwijaj się z naszymi Kursami Szachowymi</title>
				<meta
					name='description'
					content='Szeroki wybór kursów szachowych online dla każdego poziomu zaawansowania. Poznaj debiuty, strategie i taktyki z Ostre Debiuty.'
				/>
				<meta
					name='keywords'
					content='kursy szachowe, debiuty szachowe, strategia szachowa, taktyka szachowa, nauka szachów'
				/>
			</Helmet>
			<main className={styles.courses}>
				<Wrapper>
					<div className={styles.coursesHeading}>
						<img src={rook} alt='Wieża' />
						<h2>Kursy</h2>
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
			</main>
		</Layout>
	);
}
