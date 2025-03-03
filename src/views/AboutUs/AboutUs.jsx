import { Layout } from '../../components/Layout/Layout';
import aboutUs1 from '../../assets/aboutUs1.jpg';
import aboutUs2 from '../../assets/aboutUs2.jpg';
import aboutUs3 from '../../assets/aboutUs3.jpg';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { TeamMember } from '../../components/TeamMember/TeamMember';
import { Helmet } from 'react-helmet-async';
import knight from '../../assets/knight.webp';
import styles from './AboutUs.module.css';

export function AboutUs() {
	return (
		<Layout>
			<Helmet>
				<title>
					Ostre Debiuty - Kim Jesteśmy? Poznaj Naszą Pasję do Szachów
				</title>
				<meta
					name='description'
					content='Dowiedz się więcej o Ostrych Debiutach, naszej misji i zespole pasjonatów, którzy tworzą najlepsze kursy szachowe online.'
				/>
				<meta
					name='keywords'
					content='Ostre Debiuty, o nas, zespół, misja, kursy szachowe, szachy'
				/>
			</Helmet>
			<main className={styles.aboutUs}>
				<Wrapper>
					<div className={styles.aboutUsHeading}>
						<img src={knight} alt="Skoczek" />
						<h2>O Nas</h2>
					</div>

					<div className={styles.aboutUsSection}>
						<div className={styles.aboutUsSectionText}>
							<h3>CZYM SĄ OSTRE DEBIUTY?</h3>
							<p>
								To autorski projekt stworzony pod wodzą Bartosza Rudeckiego,
								mający na celu wspomóc szachistów w dalszym rozwoju i
								udoskonalaniu swoich umiejętności. Razem z Igorem Janikiem
								stworzyli platformę pozwalającą na dzielenie się ich cennym
								doświadczeniem, a także umożliwiającą młodym szachistom
								otrzymanie lekcji oraz rad trenerskich od prawdziwych
								profesjonalistów.
							</p>
						</div>
						<div className={styles.aboutUsImg}>
							<img src={aboutUs1} alt='Figury na szachownicy' />
						</div>
					</div>
					<div className={styles.aboutUsSection}>
						<div
							className={`${styles.aboutUsSectionText} ${styles.aboutUsSectionTextRight}`}
						>
							<h3>TWÓRCY OSTRYCH DEBIUTÓW</h3>
							<p>
								Bartosz Rudecki, jak Igor Janik to naprawdę poważni gracze. Na
								swoim koncie mają szereg zwycięstw szachowych. Bartosz Rudecki
								popularność zdobył streamując pojedynki szachowe na Twitchu.
								Reprezentował Polskę w Drużynowych Mistrzostwach Europy
								juniorów, wywalczył również złoty medal w Akademickich
								Drużynowych Mistrzostwach Polski. Igor Janik swoje pierwsze
								mistrzostwa Polski juniorów rozegrał mając zaledwie 10 lat! W
								2016 roku zajął drugie miejsce w mistrzostwach Europy juniorów,
								a w 2018 roku otrzymał srebrny medal na mistrzostwach świata
								juniorów.
							</p>
						</div>
						<div className={styles.aboutUsImg}>
							<img
								src={aboutUs2}
								alt='Mężczyzna przesuwający pionka na szachownicy'
							/>
						</div>
					</div>
					<div className={styles.aboutUsSection}>
						<div className={styles.aboutUsSectionText}>
							<h3>NASI TRENERZY</h3>
							<p>
								Czyli czarne konie szachownicy. To zespół pasjonatów, którzy nad
								planszą spędzili niezliczone godziny nabierając doświadczenia i
								zdobywając cenną wiedzę. To Arcymistrzowie, wielokrotni
								medaliści nie tylko mistrzostw w Polsce ale i na całym świecie.
								Każdy z nich ma za sobą wiele lat trenowania aspirujących
								szachistów. Teraz mogą się tym podzielić właśnie z Tobą! Nie
								wiesz z kim chciałbyś współpracować? Informacje o każdym z
								czwórki trenerów dostępne są na ich profilach. Wybierz swojego
								mentora, figury w dłoń i do dzieła. Zostań kolejnym mistrzem
								szachownicy!
							</p>
						</div>
						<div className={styles.aboutUsImg}>
							<img src={aboutUs3} alt='Klepsydra na tle szachownicy' />
						</div>
					</div>

					<div>
						<h3 className={styles.ourTeamHeading}> Nasz Zespół</h3>
						<TeamMember />
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
