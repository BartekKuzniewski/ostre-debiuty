import { Offer } from '../Offer/Offer';
import { Wrapper } from '../Wrapper/Wrapper';
import { offerData } from '../../constants/offerData';
import { Learning } from '../Learning/Learning';
import courseAppearance from '../../assets/courseAppearance.svg';
import { Trainers } from '../Trainers/Trainers';
import bartekImg from '../../assets/bartek.png';
import igorImg from '../../assets/igor.png';
import styles from './CourseDescription.module.css';

export function CourseDescription({ course }) {
	return (
		<section className={styles.courseDescription}>
			<Wrapper>
				<div>
					<h2>opis kursu</h2>
					<p>{course.description}</p>
				</div>
				<div>
					<h2>co oferujemy</h2>
					<div className={styles.offer}>
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
				<div>
					<h2>jak przebiegnie twoja nauka?</h2>
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
				<div>
					<h2>jak wygląda kurs?</h2>
					<div>
						<p>
							W ramach kursu otrzymujesz zestaw profesjonalnych lekcji w postaci
							materiałów wideo i zadań przygotowanych przez ekspertów i
							arcymistrzów szachowych. Napisana od zera, autorska, interaktywna
							szachownica wraz ze specjalnie przygotowanymi zadaniami zapewnia
							najwyższy poziom przyswojenia zdobytej wiedzy i sprawdzenia jej w
							praktyce.
						</p>
						<p>
							Responsywny design naszej strony pozwala na wygodne korzystanie z
							oferty nie tylko na komputerze stacjonarnym, ale także na
							urządzeniach mobilnych. Zapewniamy wygodę korzystania z każdego
							miejsca z dostępem do internetu i o każdej porze.
						</p>
						<p>
							Nie masz jeszcze konta na stronie Ostre debiuty? Bez obaw! Po
							zakupieniu kursu stworzymy je za Ciebie i wyślemy wszystkie
							informacje droga mailową.
						</p>
					</div>
					<div>
						<img
							src={courseAppearance}
							alt='Widok dedykowanej platormy na laptopie i telefonie'
						/>
					</div>
				</div>
				<div>
					<h2>Kto jest twórcą kursu?</h2>
					{course.name === 'Kurs halloween Gambit' ||
					course.name === 'Kurs Otwarcia Ruy Lopez: Jaenish Gambit' ? (
						<div className={styles.courseCreator}>
							<p>
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
						<div className={styles.courseCreator}>
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
					<button>Do koszyka</button>
				</div>
			</Wrapper>
		</section>
	);
}
