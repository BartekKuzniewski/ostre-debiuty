import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

import logo from '../../assets/logo.svg';

export function Logo() {
	return (
		<Link to='/' className={styles.logo}>
			<img src={logo} alt='Logo Ostre Debiuty' />
			<h3>
				OSTRE <br /> DEBIUTY
			</h3>
		</Link>
	);
}
