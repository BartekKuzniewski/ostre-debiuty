import { Logo } from '../Logo/Logo';
import styles from './Navigation.module.css';

export function Navigation() {
	return (
		<nav className={styles.nav}>
			<Logo />
		</nav>
	);
}
