import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';

import { coachesData } from '../../constants/coachesData';
import styles from './Coaches.module.css';
import { CoachCard } from '../../components/CoachCard/CoachCard';

export function Coaches() {
	return (
		<Layout>
			<main className={styles.coaches}>
				<Wrapper>
					<div className={styles.coachesHeading}>
						<svg
							width='65'
							height='64'
							viewBox='0 0 65 64'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.9054 60.9309C10.2808 60.5917 10.0567 60.0761 10.0889 59.3655C10.1534 57.912 10.0383 56.4494 10.2194 55.0052C10.4696 53.0176 12.0611 51.509 14.0441 51.1468C14.3771 51.0854 14.5168 50.9641 14.595 50.6219C15.1951 48.0128 16.7437 46.191 19.2132 45.1366C19.4498 45.0327 19.646 44.8543 19.7718 44.6286C22.652 38.8224 24.1835 32.4406 24.2518 25.9596C24.2518 25.8061 24.2518 25.6527 24.2518 25.5115C21.2698 25.0387 20.0864 22.0966 21.4478 19.7714C21.2943 19.6701 21.1408 19.5704 20.9874 19.4645C19.3114 18.3011 18.4059 16.7019 18.3921 14.6606C18.369 10.9603 18.3921 7.25841 18.3736 3.55807C18.3736 2.85054 18.567 2.33026 19.1917 1.99414H24.4866C25.1113 2.33333 25.3216 2.85054 25.3062 3.55961C25.2678 5.28469 25.2924 7.01131 25.2924 8.73639V9.32882H27.5946V8.73639C27.5946 7.00978 27.6206 5.28316 27.5807 3.55807C27.5654 2.85054 27.7741 2.33026 28.4003 1.99414H35.537C36.1601 2.33333 36.3719 2.85054 36.355 3.55961C36.3167 5.28469 36.3428 7.01131 36.3428 8.73639V9.32882H38.6449V8.73639C38.6449 7.00978 38.671 5.28316 38.6326 3.55807C38.6173 2.85054 38.826 2.33026 39.4507 1.99414H44.7472C45.3703 2.33333 45.5713 2.85054 45.5652 3.55807C45.5376 6.95299 45.4961 10.3479 45.5652 13.7397C45.622 16.3136 44.8838 18.2689 42.4957 19.7806C43.1418 20.947 43.2799 22.1595 42.686 23.3919C42.092 24.6244 41.0422 25.269 39.5919 25.5038C39.7453 27.3854 39.8221 29.2624 40.0523 31.1195C40.648 35.7636 42.0018 40.2786 44.0596 44.4843C44.2115 44.8085 44.4833 45.0611 44.8178 45.1888C47.2289 46.2386 48.7499 48.0527 49.3331 50.6219C49.4113 50.9641 49.5525 51.0823 49.8841 51.1452C50.9791 51.3423 51.9713 51.9147 52.6903 52.7639C53.4092 53.613 53.81 54.6861 53.8238 55.7987C53.8453 56.9866 53.7977 58.1775 53.8422 59.3639C53.8683 60.073 53.6458 60.5917 53.0242 60.9294L10.9054 60.9309ZM47.0463 51.0409C46.6395 48.728 44.4602 46.9185 42.0229 46.9093C35.3267 46.8832 28.6305 46.8954 21.9343 46.9093C20.9127 46.9101 19.9157 47.2228 19.0766 47.8056C17.9487 48.558 17.1553 49.7172 16.8619 51.0409H26.3606C26.533 51.0347 26.7057 51.0378 26.8778 51.0501C27.178 51.0691 27.4588 51.2051 27.6597 51.429C27.8606 51.6529 27.9656 51.9467 27.9522 52.2472C27.9419 52.538 27.8198 52.8136 27.6114 53.0165C27.403 53.2195 27.1242 53.3343 26.8333 53.3369C26.6614 53.3492 26.488 53.3369 26.3161 53.3369C22.5743 53.3369 18.833 53.3369 15.0923 53.3369C13.7018 53.3369 12.5814 54.1979 12.454 55.4856C12.3527 56.5047 12.4341 57.5422 12.4341 58.5797H51.5416C51.5416 57.7555 51.5416 56.9727 51.5416 56.1885C51.5416 54.3468 50.5256 53.3338 48.6992 53.3323H37.5905C37.3986 53.34 37.2063 53.3354 37.015 53.3185C36.756 53.2838 36.5165 53.1623 36.3356 52.9738C36.1547 52.7854 36.043 52.5411 36.0189 52.281C35.9975 52.0298 36.0617 51.7788 36.201 51.5687C36.3403 51.3586 36.5466 51.2018 36.7863 51.1237C37.0256 51.0578 37.2733 51.0278 37.5215 51.0347C40.4764 51.0286 43.4308 51.0286 46.3848 51.0347L47.0463 51.0409ZM37.3772 25.5191H26.5647C26.543 32.0962 25.1143 38.5924 22.3748 44.5718H41.5671C38.8266 38.5927 37.398 32.0963 37.3772 25.5191ZM20.6896 4.32085C20.6896 7.72037 20.6896 11.0554 20.6896 14.392C20.6896 16.6788 22.1323 18.1092 24.4345 18.1108H39.509C41.8111 18.1108 43.2492 16.6758 43.2508 14.3859C43.2508 11.2212 43.2508 8.057 43.2508 4.89333C43.2508 4.70762 43.2339 4.52191 43.2247 4.33927H40.9501C40.9501 6.31759 40.9501 8.25294 40.9501 10.1868C40.9501 11.2611 40.5603 11.6617 39.509 11.6647C38.1461 11.6647 36.7843 11.6647 35.4234 11.6647C34.4734 11.6647 34.0421 11.2411 34.0421 10.3003C34.0421 8.84229 34.0421 7.38426 34.0421 5.92776V4.34081H29.8982C29.8982 6.33601 29.8982 8.29285 29.8982 10.2466C29.8982 11.2411 29.4885 11.6601 28.517 11.6632C27.1367 11.6632 25.7554 11.6632 24.3731 11.6632C23.4246 11.6632 22.9918 11.2396 22.9918 10.2957C22.9918 8.80085 22.9918 7.30445 22.9918 5.80958V4.32085H20.6896ZM31.9687 23.1755C34.3844 23.1755 36.8001 23.1755 39.2158 23.1755C40.2503 23.1755 40.8811 22.4757 40.7245 21.5349C40.6048 20.8273 40.037 20.4175 39.1514 20.4175C34.3588 20.4175 29.5657 20.4175 24.7721 20.4175C24.6378 20.4116 24.5033 20.4173 24.37 20.4344C23.8405 20.5265 23.4399 20.8089 23.2634 21.3231C23.0869 21.8372 23.1099 22.3728 23.5458 22.7044C23.9003 22.9763 24.3277 23.1366 24.7736 23.1648C27.1817 23.197 29.579 23.1755 31.9687 23.1755Z'
								fill='#f2f2f2'
							></path>
							<path
								d='M33.1172 52.1963C33.1172 52.5003 32.9964 52.792 32.7814 53.007C32.5664 53.222 32.2748 53.3428 31.9707 53.3428C31.6666 53.3428 31.375 53.222 31.16 53.007C30.945 52.792 30.8242 52.5003 30.8242 52.1963C30.8242 51.8922 30.945 51.6006 31.16 51.3856C31.375 51.1706 31.6666 51.0498 31.9707 51.0498C32.2748 51.0498 32.5664 51.1706 32.7814 51.3856C32.9964 51.6006 33.1172 51.8922 33.1172 52.1963Z'
								fill='#f2f2f2'
							></path>
						</svg>
						<h2>Trenerzy</h2>
					</div>
					<p className={styles.description}>
						Nasz zespół trenerski stanowią Arcymistrzowie szachowi, wielokrotni
						medaliści mistrzostw Polski i świata. Razem z nimi chcemy zapewnić
						Wam jak najlepsze warunki do nauki i rozwoju oraz prowadzić Was po
						coraz wyższych szczeblach szachowego sukcesu.
					</p>
					<div className={styles.grid}>
						{coachesData.map((coach, index) => (
							<CoachCard
								key={index}
								name={coach.name}
								slug={coach.slug}
								fide={coach.fide}
								title={coach.title}
								description={coach.description}
								image={coach.image}
							/>
						))}
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
