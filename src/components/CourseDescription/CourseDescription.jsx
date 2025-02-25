import { Offer } from '../Offer/Offer';
import { Wrapper } from '../Wrapper/Wrapper';
import { offerData } from '../../constants/offerData';
import { Learning } from '../Learning/Learning';
import { Trainers } from '../Trainers/Trainers';
import { Button } from '../../components/Button/Button';
import bartekImg from '../../assets/bartek.webp';
import courseAppearance from '../../assets/courseAppearance.webp';
import igorImg from '../../assets/igor.webp';
import styles from './CourseDescription.module.css';

export function CourseDescription({ course }) {
	return (
		<section className={styles.courseDescription}>
			<Wrapper>
				<div className={styles.description}>
					<h3>opis kursu</h3>
					<div>
						{course.description.map((paragraph, index) => (
							<p key={index} className={styles.paragraph}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
				<div className={styles.offer}>
					<h3>co oferujemy</h3>
					<div className={styles.offerItems}>
						{offerData.map((offer) => (
							<Offer
								key={offer.id}
								icon={offer.icon}
								alt={offer.alt}
								description={offer.description}
							/>
						))}
					</div>
				</div>
				<div className={styles.learning}>
					<h3>jak przebiegnie twoja nauka?</h3>
					<div className={styles.learningContainer}>
						<Learning
							description={
								'Dogłębnie zrozumiesz kompleksowe zasady stojące za tematem kursu.'
							}
						/>
						<Learning
							description={
								'Otrzymasz wskazówki od najlepszych instruktorów i arcymistrzów szachowych.'
							}
						/>
						<Learning
							description={
								'Sam dostosujesz przebieg do swojego harmonogramu oraz tempa nauki.'
							}
						/>
						<Learning
							description={
								'Wypróbujesz i udoskonalisz zdobytą wiedzę rozwiązując przygotowane zadania.'
							}
						/>
					</div>
				</div>
				<div className={styles.courseAppearance}>
					<h3>jak wygląda kurs?</h3>
					<div className={styles.courseAppearanceContainer}>
						<div className={styles.courseAppearanceInfo}>
							<p>
								W ramach kursu otrzymujesz zestaw profesjonalnych lekcji w
								postaci materiałów wideo i zadań przygotowanych przez ekspertów
								i arcymistrzów szachowych. Napisana od zera, autorska,
								interaktywna szachownica wraz ze specjalnie przygotowanymi
								zadaniami zapewnia najwyższy poziom przyswojenia zdobytej wiedzy
								i sprawdzenia jej w praktyce.
							</p>
							<p>
								Responsywny design naszej strony pozwala na wygodne korzystanie
								z oferty nie tylko na komputerze stacjonarnym, ale także na
								urządzeniach mobilnych. Zapewniamy wygodę korzystania z każdego
								miejsca z dostępem do internetu i o każdej porze.
							</p>
							<p>
								Nie masz jeszcze konta na stronie Ostre debiuty? Bez obaw! Po
								zakupieniu kursu stworzymy je za Ciebie i wyślemy wszystkie
								informacje droga mailową.
							</p>
						</div>
						<div className={styles.courseAppearanceImage}>
							<img
								src={courseAppearance}
								alt='Widok dedykowanej platormy na laptopie i telefonie'
							/>
						</div>
					</div>
				</div>
				<div className={styles.courseCreator}>
					<h3>Kto jest twórcą kursu?</h3>
					{course.name === 'Kurs halloween Gambit' ||
					course.name === 'Kurs Otwarcia Ruy Lopez: Jaenish Gambit' ? (
						<div className={styles.creator}>
							<p className={styles.creatorInfo}>
								<span>Bartosz Rudecki </span>- charyzmatyczny streamer szachowy.
								Jego kanał na Twitchu rozwinął niejeden talent i przekonał, że
								szachy to nie jest tylko sport dla starych ludzi.
							</p>
							<Trainers
								img={bartekImg}
								name='Bartosz Rudecki'
								chessTitle='IM'
								rank='1802'
								exp='16'
							/>
						</div>
					) : (
						<div className={styles.creator}>
							<p>
								<span>Igor Janik </span> - utytułowany król szachów, Arcymistrz
								Szachowy, wielokrotny medalista mistrzostw w Polsce i na
								świecie, Wicemistrz Świata Juniorów, prawdziwy szachowy
								autorytet.
							</p>
							<Trainers
								img={igorImg}
								name='Igor Janik'
								chessTitle='GM'
								rank='2008'
								exp='19'
							/>
						</div>
					)}
				</div>
				<div className={styles.buyCourse}>
					<p>JESTEŚ ZDECYDOWANY NA ZAKUP?</p>
					<Button bgColor='#806e2d' hoverColor='#978130'>
						do koszyka
					</Button>
				</div>
			</Wrapper>
		</section>
	);
}
