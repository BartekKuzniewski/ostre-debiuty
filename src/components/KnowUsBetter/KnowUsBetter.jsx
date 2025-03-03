import { Trainers } from '../Trainers/Trainers';
import { Wrapper } from '../Wrapper/Wrapper';

import bartekImg from '../../assets/bartek.webp';
import igorImg from '../../assets/igor.webp';
import styles from './KnowUsBetter.module.css';
import knight from '../../assets/knight.webp'

export function KnowUsBetter() {
	return (
		<section className={styles.knowUs}>
			<Wrapper>
				<div className={styles.knowUsHeading}>
				<img src={knight} alt="Skoczek" />
					<h2>Poznaj Nas Bliżej</h2>
				</div>
				<div className={styles.knowUsContent}>
					<div className={styles.knowUsContentInfo}>
						<div>
							<h3>OSTRZY DEBIUTANCI</h3>
							<p>
								<span>Bartosz Rudecki </span>- charyzmatyczny streamer szachowy.
								Jego kanał na Twitchu rozwinął niejeden talent i przekonał, że
								szachy to nie jest tylko sport dla starych ludzi.
							</p>
							<p>
								<span>Igor Janik </span> - utytułowany król szachów, Arcymistrz
								Szachowy, wielokrotny medalista mistrzostw w Polsce i na
								świecie, Wicemistrz Świata Juniorów, prawdziwy szachowy
								autorytet.
							</p>
						</div>
						<div>
							<h3>CZARNE KONIE SZACHOWNICY</h3>
							<p>
								Nasza drużyna składa się z ekspertów szachownicy, którzy swoje
								umiejętności i doświadczenie przekuwają w kompletne kursy.
								Pamiętamy czas, kiedy uczyliśmy się podstawowych ruchów na
								szachownicy, wiemy też jak wygląda ścieżka rozwoju od piona do
								szachowego króla. Dlatego poziom naszych kursów jest doskonale
								dopasowany do umiejętności uczestników.
							</p>
						</div>
					</div>
					<div className={styles.knowUsContentTrainers}>
						<Trainers
							img={bartekImg}
							name='Bartosz Rudecki'
							chessTitle='IM'
							rank='1802'
							exp='16'
						/>
						<Trainers
							img={igorImg}
							name='Igor Janik'
							chessTitle='GM'
							rank='2008'
							exp='19'
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
