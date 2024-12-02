import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import styles from './HomePage.module.css';

import headerImage from '../../assets/header-img.svg';

export function HomePage() {
	return (
		<Layout>
			<header className={styles.header}>
				<Wrapper>
					<div className={styles.headerContent}>
						<div className={styles.headerText}>
							<h2>ZOSTAŃ KRÓLEM SZACHÓW</h2>
							<h3>
								CHCESZ RZĄDZIĆ SZACHOWNICĄ I WYGRYWAĆ WSZYSTKIE BITWY NICZYM
								JAGIEŁŁO POD GRUNWALDEM?
							</h3>
							<p>
								Zobacz profesjonalne kursy, które przygotowaliśmy specjalnie dla
								Ciebie. Bez względu na to czy dopiero zaczynasz, czy może masz
								już pierwsze zwycięstwa na szachowym polu bitwy.
							</p>
							<button className={styles.button}>zobacz więcej</button>
						</div>
						<div className={styles.headerImg}>
							<img
								src={headerImage}
								alt='Król siedzący na tronie w otoczeniu pionów szachowych'
							/>
						</div>
					</div>
				</Wrapper>
			</header>
		</Layout>
	);
}
