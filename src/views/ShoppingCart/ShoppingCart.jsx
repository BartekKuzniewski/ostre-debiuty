import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import styles from './ShoppingCart.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useCart } from '../../contexts/CartContext';

export function ShoppingCart() {
	const { cart, removeFromCart } = useCart();

	return (
		<Layout>
			<main className={styles.shoppingCart}>
				<Wrapper>
					<div className={styles.shoppingCartHeading}>
						<h2>Koszyk</h2>
					</div>

					{cart.length === 0 ? (
						<p className={styles.emptyCart}>Twój koszyk jest pusty.</p>
					) : (
						cart.map((course) => (
							<div key={course.id} className={styles.product}>
								<div className={styles.leftContent}>
									<div className={styles.imageSection}>
										<img
											src={course.image}
											alt={course.title}
											className={styles.courseImage}
										/>
										<h3 className={styles.courseTitle}>{course.title}</h3>
									</div>
								</div>
								<div className={styles.rightContent}>
									<div className={styles.productPrice}>
										<p>{course.price} zł</p>
										<p onClick={() => removeFromCart(course.id)}>
											<RiDeleteBin5Line />
										</p>
									</div>
								</div>
							</div>
						))
					)}
				</Wrapper>
			</main>
		</Layout>
	);
}
