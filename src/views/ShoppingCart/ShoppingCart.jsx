import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useCart } from '../../contexts/CartContext';
import styles from './ShoppingCart.module.css';

export function ShoppingCart() {
	const { cart, removeFromCart } = useCart();

	const totalPrice = cart.reduce((sum, course) => sum + course.price, 0);

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

					<div className={styles.paymentSection}>
						<h3>Wybierz formę płatności</h3>
						<div className={styles.paymentMethods}>
							<button className={styles.selected}>BLIK</button>
							<button>Przelewy24</button>
							<button>PayPal</button>
							<button>Karta</button>
						</div>
						<div className={styles.totalPrice}>
							<p>{totalPrice.toFixed(2)} zł</p>
							<p>Wartość produktów</p>
						</div>
						<button className={styles.payButton}>Kupuję i płacę</button>
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
