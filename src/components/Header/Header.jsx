import { Wrapper } from '../Wrapper/Wrapper';
import { Button } from '../Button/Button';
import headerImage from '../../assets/header-img.webp';
import headerImageSmall from '../../assets/header-img-small.webp';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.headerContent}>
					<div className={styles.headerText}>
						<h1>ZOSTAŃ KRÓLEM SZACHÓW</h1>
						<h3>
							CHCESZ RZĄDZIĆ SZACHOWNICĄ I WYGRYWAĆ WSZYSTKIE BITWY NICZYM
							JAGIEŁŁO POD GRUNWALDEM?
						</h3>
						<p>
							Zobacz profesjonalne kursy, które przygotowaliśmy specjalnie dla
							Ciebie. Bez względu na to czy dopiero zaczynasz, czy może masz już
							pierwsze zwycięstwa na szachowym polu bitwy.
						</p>
						<Button to={`/kursy`}> Zobacz więcej</Button>
					</div>

					<div className={styles.headerImg}>
						<picture>
							<source media='(max-width: 576px)' srcSet={headerImageSmall} />
							<img
								src={headerImage}
								alt='Król siedzący na tronie w otoczeniu pionów szachowych'
							/>
						</picture>
					</div>
				</div>
			</Wrapper>
		</header>
	);
}
