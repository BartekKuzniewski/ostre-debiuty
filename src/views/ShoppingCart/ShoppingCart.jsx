import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../../components/Button/Button';
import PayPal from '../../assets/PayPal.png';
import blik from '../../assets/blik.png';
import creditCard from '../../assets/creditCard.png';
import przelewy from '../../assets/przelewy.png';
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
										<h3 className={styles.courseTitle}>{course.name}</h3>
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
						<div className={styles.paymentContent}>
							<div className={styles.paymentMethods}>
								<Button className={styles.cartButton}>
									<img src={blik} alt='BLIK' />
								</Button>
								<Button>
									<img src={przelewy} alt='Przelewy24' />
								</Button>
								<Button>
									<img src={PayPal} alt='PayPal' />
								</Button>
								<Button>
									<img src={creditCard} alt='Karta' />
								</Button>
							</div>
							<div className={styles.totalPrice}>
								<p className={styles.price}>{totalPrice.toFixed(2)} zł</p>
								<p className={styles.productsValue}>Wartość produktów</p>
								<Button>Kupuję i płacę</Button>
							</div>
						</div>
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
