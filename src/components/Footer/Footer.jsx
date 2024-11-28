import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Logo />

			<p className={styles.footerEmail}>E-MAIL: KONTAKT@OSTRE-DEBIUTY.PL </p>

			<div className={styles.footerInfo}>
				<div className={styles.footerCopyrights}>
					<span>2024 OSTRE DEBIUTY</span>
					<span>WSZELKIE PRAWA ZASTRZEŻONE</span>
				</div>
				<div className={styles.footerRules}>
					<Link to='/polityka-prywatnosci' className={styles.footerLink}>
						POLITYKA PRYWATNOŚCI
					</Link>
					<Link to='/regulamin' className={styles.footerLink}>
						REGULAMIN
					</Link>
				</div>
			</div>
		</footer>
	);
}
