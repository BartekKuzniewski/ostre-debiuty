import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';

export function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);

	function handleShowNavbar() {
		setShowNavbar(!showNavbar);
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.wrapper}>
				<Logo />

				<div>
					<ul className={`${styles.navItems} ${showNavbar && styles.active} `}>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								to='/kursy'
							>
								kursy
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								to='/trenerzy'
							>
								trenerzy
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								to='/o-nas'
							>
								o nas
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								to='/kontakt'
							>
								kontakt
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								to='/koszyk'
								aria-label='Przejdź do koszyka'
							>
								<LuShoppingCart size={20} />
							</NavLink>
						</li>
					</ul>
					<div className={styles.navBurgerBtn} onClick={handleShowNavbar}>
						<GiHamburgerMenu />
					</div>
				</div>
			</div>
		</nav>
	);
}
