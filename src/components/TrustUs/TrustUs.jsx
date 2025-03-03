import { Wrapper } from '../Wrapper/Wrapper';
import styles from './TrustUs.module.css';

import trustUsImg from '../../assets/trustUsImg.svg';
import szymonImg from '../../assets/szymon.webp';
import juliaImg from '../../assets/julia.webp';
import igorImg from '../../assets/igor.webp';
import patrykImg from '../../assets/patryk.webp';
import rook from '../../assets/rook.webp';
import { TrainerShowcase } from '../TrainerShowcase/TrainerShowcase';

export function TrustUs() {
	return (
		<section className={styles.trustUs}>
			<Wrapper>
				<div className={styles.trustUsHeading}>
					<img src={rook} alt='Wieża' />
					<h2>Zaufaj Naszym Trenerom</h2>
				</div>
				<div className={styles.trustUsContent}>
					<div className={styles.trustUsInfo}>
						<h3>z kim możesz współpracować</h3>
						<p>
							Nasi trenerzy to przede wszystkim ludzie zafascynowani szachami!
							Swoją wiedzę i umiejętności przekażą Ci w przystępnej formie.
							Możesz zapomnieć o nudnym monologu i stercie rozważań
							teoretycznych. Każdy z trenerów posiada bogate doświadczenie
							szachisty, dlatego kursy na każdym poziomie są… no właśnie, na
							najwyższym poziomie! To Ty decydujesz czy wybierzesz gotowy kurs,
							czy indywidualne lekcję z trenerem.
						</p>

						<div className={styles.trustUsTrainers}>
							<TrainerShowcase
								img={szymonImg}
								name='szymon gumularz'
								description='Arcymistrz, TOP 10 Polski, 18 medali mistrzostw na całym świecie'
							/>
							<TrainerShowcase
								img={igorImg}
								name='igor janik'
								description='Arcymistrz, Wicemistrz Świata Juniorów, 20-krotny medalista mistrzostw'
							/>
							<TrainerShowcase
								img={juliaImg}
								name='julia antolak'
								description='Arcymistrzyni, wielokrotna medalistka mistrzostw na świecie, Kadra Narodowa'
							/>
							<TrainerShowcase
								img={patrykImg}
								name='patryk chylewski'
								description='Mistrz Międzynarodowy wielokrotny medalista Polski'
							/>
						</div>
					</div>

					<div className={styles.trustUsImg}>
						<img src={trustUsImg} alt='Człowiek myślący nad szachami'></img>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
