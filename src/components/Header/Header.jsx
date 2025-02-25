import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Header.module.css';

import headerImage from '../../assets/header-img.png';
import { Button } from '../Button/Button';


export function Header() {
	return (
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
							Ciebie. Bez względu na to czy dopiero zaczynasz, czy może masz już
							pierwsze zwycięstwa na szachowym polu bitwy.
						</p>
						<Button to={`/kursy`}> Zobacz więcej</Button>
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
	);
}
