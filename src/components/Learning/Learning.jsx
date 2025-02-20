import styles from './Learning.module.css';

export function Learning({ description }) {
	return (
		<div className={styles.learning}>
			<div>
				<svg
					width='30'
					height='30'
					viewBox='0 0 36 36'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M27.0003 2.41184C29.7152 3.97939 31.9737 6.22883 33.5521 8.93746C35.1305 11.6461 35.9741 14.72 35.9994 17.8548C36.0247 20.9897 35.2309 24.0768 33.6964 26.8106C32.162 29.5444 29.9402 31.83 27.251 33.4412C24.5617 35.0524 21.4983 35.9333 18.364 35.9968C15.2297 36.0602 12.1331 35.3039 9.38091 33.8029C6.62869 32.3018 4.31622 30.1079 2.67243 27.4385C1.02864 24.769 0.110538 21.7166 0.00900032 18.5832L0 18L0.00900032 17.4168C0.109807 14.3082 1.0144 11.2787 2.63458 8.6237C4.25477 5.96872 6.53526 3.77887 9.25372 2.26762C11.9722 0.756379 15.0358 -0.0246797 18.146 0.00059445C21.2562 0.0258686 24.3068 0.856613 27.0003 2.41184ZM24.6729 13.1274C24.363 12.8174 23.9506 12.6313 23.5131 12.6038C23.0757 12.5763 22.6432 12.7093 22.2969 12.978L22.1277 13.1274L16.2002 19.053L13.8728 16.7274L13.7036 16.578C13.3572 16.3095 12.9248 16.1766 12.4875 16.2042C12.0501 16.2318 11.6379 16.418 11.328 16.7279C11.0181 17.0377 10.832 17.45 10.8044 17.8874C10.7768 18.3247 10.9097 18.7571 11.1781 19.1034L11.3275 19.2726L14.9276 22.8727L15.0968 23.0221C15.4125 23.267 15.8007 23.3999 16.2002 23.3999C16.5997 23.3999 16.9879 23.267 17.3036 23.0221L17.4728 22.8727L24.6729 15.6726L24.8223 15.5034C25.091 15.1571 25.224 14.7246 25.1965 14.2872C25.169 13.8497 24.9828 13.4373 24.6729 13.1274Z'
						fill='#806E2D'
					></path>
				</svg>
			</div>
			<p>{description}</p>
		</div>
	);
}
