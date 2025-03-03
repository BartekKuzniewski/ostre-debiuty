import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Layout } from '../../components/Layout/Layout';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import pawn from '../../assets/pawn.webp';
import styles from './Contact.module.css';

export function Contact() {
	return (
		<Layout>
			<Helmet>
				<title>
					Ostre Debiuty - Skontaktuj Się z Nami i Rozpocznij Szachową Przygodę
				</title>
				<meta
					name='description'
					content='Skontaktuj się z nami! Masz pytania dotyczące kursów, trenerów lub strony? Chętnie pomożemy.'
				/>
				<meta
					name='keywords'
					content='kontakt, Ostre Debiuty, pytania, pomoc, formularz kontaktowy'
				/>
			</Helmet>
			<main className={styles.contact}>
				<Wrapper>
					<div className={styles.contactHeading}>
						<img src={pawn} alt='Pionek szachowy' />
						<h2>Kontakt</h2>
					</div>

					<div className={styles.contactInfo}>
						<p>
							Chciałbyś o coś zapytać lub masz jakiś problem z Twoim
							zamówieniem?
						</p>
						<p>
							Bardzo chętnie odpowiemy na Twoje pytania i spróbujemy rozwiązać
							problemy dotyczące naszej strony.
						</p>
					</div>
					<div className={styles.contactForm}>
						<ContactForm />
					</div>
				</Wrapper>
			</main>
		</Layout>
	);
}
