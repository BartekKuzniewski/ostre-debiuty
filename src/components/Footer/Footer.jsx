import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import { Logo } from '../Logo/Logo';

function Footer() {
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

export default Footer;

// <div className={styles.footerContent}>
// <Link to='/' className={styles.footerLogoLink}>
// <img
//     src='logo.png'
//     alt='Logo Ostre Debiuty'
//     className={styles.footerLogo}
// />
// <span className={styles.footerTitle}>OSTRE DEBIUTY</span>
// </Link>
// <p className={styles.footerEmail}>
// E-MAIL:
// <a
//     href='mailto:kontakt@ostre-debiuty.pl'
//     className={styles.footerEmailLink}
// >
//     KONTAKT@OSTRE-DEBIUTY.PL
// </a>
// </p>
// <p className={styles.footerRights}>
// 2024 OSTRE DEBIUTY
// <br />
// WSZELKIE PRAWA ZASTRZEŻONE
// </p>
// <div className={styles.footerLinks}>
// <Link to='/polityka-prywatnosci' className={styles.footerLink}>
//     POLITYKA PRYWATNOŚCI
// </Link>
// <Link to='/regulamin' className={styles.footerLink}>
//     REGULAMIN
// </Link>
// </div>
// </div>
