import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';

import styles from './DesktopNavbar.module.css'

export function DesktopNavbar() {
	return (
		<div >
			<ul className={styles.desktopNavList}>
				<li>
					<Link to='/kursy' className={styles.desktopNavLink}>
						kursy
					</Link>
				</li>
				<li>
					<Link to='/trenerzy' className={styles.desktopNavLink}>
						trenerzy
					</Link>
				</li>
				<li>
					<Link to='/o-nas' className={styles.desktopNavLink}>
						o nas
					</Link>
				</li>
				<li>
					<Link to='/kontakt' className={styles.desktopNavLink}>
						kontakt
					</Link>
				</li>
				<li>
					<Link to='/zaloguj-sie' className={styles.desktopNavLink}>
						<FiUser />
					</Link>
				</li>
				<li>
					<Link to='/koszyk' className={styles.desktopNavLink}>
						<LuShoppingCart />
					</Link>
				</li>
			</ul>
		</div>
	);
}
