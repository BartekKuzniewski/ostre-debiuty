import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { useCart } from '../../contexts/CartContext';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { coursesData } from '../../constants/coursesData';
import { Card } from '../../components/Card/Card';
import { CourseDescription } from '../../components/CourseDescription/CourseDescription';
import { FaRegEnvelope } from 'react-icons/fa';
import { Button } from '../../components/Button/Button';
import styles from './CoursesPage.module.css';
import { useState } from 'react';

export function CoursesPage() {
	const { name } = useParams();
	const { cart, addToCart } = useCart();
	const course = coursesData.find((c) => c.slug === name);

	const [modal, setModal] = useState({ show: false, message: '', color: '' });

	if (!course) {
		return <h2>Nie znaleziono kursu</h2>;
	}

	function handleAddToCart(course) {
		const isInCart = cart.some((item) => item.id === course.id);
		setModal({
			show: true,
			message: isInCart
				? 'Posiadasz już ten kurs w koszyku'
				: 'Pomyślnie dodano kurs do koszyka',
			color: isInCart ? 'rgba(125, 0, 0, 0.8)' : 'rgba(13, 92, 2, 0.8)',
		});

		if (!isInCart) addToCart(course);

		setTimeout(() => setModal((prev) => ({ ...prev, show: false })), 3000);
	}

	return (
		<Layout>
			<section className={styles.coursesPage}>
				<Wrapper>
					<div className={styles.container}>
						{modal.show && (
							<div
								className={styles.modal}
								style={{ backgroundColor: modal.color }}
							>
								{modal.message}
							</div>
						)}
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
								<p className={styles.delivery}>
									<FaRegEnvelope size={28} />{' '}
									<span>Wysyłka natychmiastowa</span>
								</p>
								<div className={styles.priceInfo}>
									<span className={styles.price}>{course.price} zł</span>
									<Button
										fontSize='1rem'
										onClick={() => handleAddToCart(course)}
									>
										do koszyka
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
			<CourseDescription course={course} />
			<section className={styles.notLookingFor}>
				<h3>to nie tego szukasz?</h3>
				<p>
					Sprawdź nasze inne propozycje kursów, a na pewno znajdziesz coś co
					odpowiada twojemu poziomowi.
				</p>
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
			</section>
		</Layout>
	);
}
