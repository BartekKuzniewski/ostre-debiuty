import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export function Button({
	children,
	bgColor = '#292929',
	hoverColor = '#806e2d',
	fontSize = '1.1rem',
	to,
}) {
	const buttonStyle = {
		'--bg-color': bgColor,
		'--hover-color': hoverColor,
		'--font-size': fontSize,
	};
	if (to) {
		return (
			<Link to={to} className={styles.button} style={buttonStyle}>
				{children}
			</Link>
		);
	}

	return (
		<button className={styles.button} style={buttonStyle}>
			{children}
		</button>
	);
}
