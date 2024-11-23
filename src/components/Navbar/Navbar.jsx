import { Logo } from '../Logo/Logo';
import { DesktopNavbar } from './DesktopNavbar';
import styles from './Navbar.module.css';

export function Navbar() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<DesktopNavbar />
		</nav>
	);
}
