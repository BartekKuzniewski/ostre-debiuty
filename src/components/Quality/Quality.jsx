import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Quality.module.css';

import qualityImg from '../../assets/qualityImg.png';
import bishop from '../../assets/bishop.webp';

export function Quality() {
	return (
		<section className={styles.quality}>
			<Wrapper>
				<div className={styles.qualityHeading}>
					<img src={bishop} alt='goniec' />
					<h2>Odkryj Prawdziwą Jakość</h2>
				</div>
				<div className={styles.qualityContent}>
					<div className={styles.qualityImg}>
						<img src={qualityImg} alt='Król ze skoczkiem w asyście pionów' />
					</div>
					<div className={styles.qualityInfo}>
						<h3>POSTAW NA NASZE DOŚWIADCZENIE</h3>
						<p>
							Nad szachownicą spędziliśmy już długie lata, a teraz chętnie
							pomożemy Ci rozwijać umiejętności szachowe i wygrywać kolejne
							pojedynki!
						</p>
						<h3 className={styles.qualityInfoHeadingRight}>
							OD PIONA DO KRÓLA
						</h3>
						<p className={styles.qualityInfoTextRight}>
							Wejdź na wyższy poziom umiejętności szachowych. Jak to zrobić?
							Nasza metoda jest taka: przekazujemy Ci cenną wiedzę, integrujemy
							planszę z lichess.com, dzięki czemu Ty możesz w czasie
							rzeczywistym tę wiedzę wykorzystywać i doskonalić swoje strategie.
							Proste? Jak ruch piona na szachownicy!
						</p>
						<h3>CIĄGŁY ROZWÓJ</h3>
						<p>
							Dzięki naszym kursom nie zabraknie Ci zapału do szachowych
							rozgrywek i nauki. Dlaczego? Bo wiemy jak przekazywać wiedzę, żeby
							była naprawdę ciekawa i stale pokazujemy jej praktyczne
							zastosowanie. Nie wierzysz? Sprawdź nas, do zobaczenia przy
							szachownicy!
						</p>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
