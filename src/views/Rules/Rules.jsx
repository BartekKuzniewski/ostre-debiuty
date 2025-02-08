import { Layout } from '../../components/Layout/Layout';
import styles from './Rules.module.css';

export function Rules() {
	return (
		<Layout>
			<main className={styles.rules}>
				<h2>POLITYKA PRYWATNOŚCI I POLITYKA COOKIES</h2>
				<p>
					Korzystanie ze strony internetowej oraz sklepu internetowego pod nazwą
					ostre-debiuty.pl oznacza akceptację poniższych warunków Polityki
					Prywatności i Polityki Cookies.
				</p>
				<p>
					Zapoznaj się z jej postanowieniami. Poniższy spis treści pomoże Ci w
					tym. Informuję Cię w niej, w jaki sposób troszczę się o Twoje dane,
					jak je przetwarzam, komu je powierzam i wiele innych ważnych kwestii
					związanych z danymi osobowymi.
				</p>

				<div className={styles.paragraph}>
					<h3>§1 POSTANOWIENIA OGÓLNE</h3>
					<p>
						Niniejsza Polityka Prywatności i Polityka Cookies określa zasady
						przetwarzania i ochrony danych osobowych przekazanych przez
						Użytkowników oraz plików Cookies, a także innych technologii
						pojawiających się na stronie internetowej ostre-debiuty.pl.
					</p>
					<p>
						Administratorem strony i danych osobowych przekazywanych w jej
						ramach jest Bartosz Rudecki prowadzący działalność gospodarczą pod
						firmą Bartosz Rudecki pod adresem ul. Wesoła 2, 02-432 Warszawa NIP:
						1234567890 zgodnie z dokumentem wygenerowanym z systemu Centralnej
						Ewidencji i Informacji o Działalności Gospodarczej zwany dalej
						Administratorem Dbam o bezpieczeństwo Twoich danych osobowych oraz o
						Twoją prywatność jako Użytkownika Strony. Cieszę się, że odwiedziłeś
						moją Stronę.
					</p>
					<p>
						W razie jakichkolwiek wątpliwości w zakresie postanowień niniejszej
						Polityki Prywatności i Polityki Cookies proszę kontaktować się z
						Administratorem poprzez adres e-mail: kontakt@ostre-debiuty.pl.
						Administrator zastrzega sobie prawo do wprowadzania zmian w polityce
						prywatności, a każdego Użytkownika strony obowiązuje znajomość
						aktualnej polityki prywatności. Przyczyną zmian mogą być rozwój
						technologii internetowej, zmiany w powszechnie obowiązującym prawie
						czy też rozwój Strony poprzez np. korzystanie z nowych narzędzi
						przez Administratora. Na dole strony znajduje się data publikacji
						aktualnej Polityki prywatności.
					</p>
				</div>

				<div className={styles.paragraph}>
					<h3>§2 DEFINICJE</h3>
					<p>
						<span>Administrator</span> – Bartosz Rudecki prowadzący działalność
						gospodarczą pod firmą Bartosz Kuźniewski, NIP: 1234567890
					</p>
					<p>
						<span>Użytkownik</span> – każdy podmiot przebywający na stronie i
						korzystający z niej. Strona i/lub Sklep internetowy – strona
						internetowa i sklep internetowy znajdujący się pod adresem
						https://www.ostre-debiuty.pl
					</p>
					<p>
						<span>Newsletter</span> – oznacza bezpłatną usługę świadczoną drogą
						elektroniczną przez Administratora na rzecz Użytkownika poprzez
						przesyłanie listów elektronicznych, za pośrednictwem których
						Administrator informuje o wydarzeniach, usługach, produktach i
						innych elementach istotnych z punktu widzenia Administratora i /lub
						w celu realizacji prawnie uzasadnionego celu Administratora, którym
						jest marketing bezpośredni. Szczegółowe informacje na temat wysyłki
						Newslettera znajdują się w dalszej części niniejszej polityki
						prywatności. Konto Użytkownika lub Konto – konto Użytkownika
						założone na platformie internetowej Sklepu internetowego,
						umożliwiające dostęp do zakupionych szkoleń i produktów. Formularz
						lub Formularze – miejsca na Stronie, które umożliwiają wprowadzenie
						danych osobowych przez Użytkownika, we wskazanych w nich celach np.
						w celu wysyłki newslettera, w celu złożenia zamówienia, w celu
						kontaktu z Użytkownikiem.
					</p>
					<p>
						<span>RODO</span> – oznacza Rozporządzenie Parlamentu Europejskiego
						i Rady EU 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
						fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
						swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
						(Ogólne Rozporządzenie o Ochronie Danych).
					</p>
				</div>
				<div className={styles.paragraph}>
					<h3>§3 WYŁĄCZENIE ODPOWIEDZIALNOŚCI I PRAWA AUTORSKIE</h3>
					<p>
						Treści przedstawione na Stronie nie stanowią porad specjalistycznych
						i nie odnoszą się do konkretnego stanu faktycznego. Jeśli chcesz
						uzyskać pomoc w konkretnej sprawie, skontaktuj się z osobą
						uprawnioną do udzielania takich porad lub z Administratorem za
						podane dane kontaktowe. Administrator nie ponosi odpowiedzialności
						za wykorzystanie treści zawartych na Stronie lub działań czy
						zaniechań podejmowanych na jej podstawie.
					</p>
					<p>
						Wszystkie treści umieszczone na Stronie stanowią przedmiot praw
						autorskich określonych osób i/lub Administratora (np. zdjęcia,
						teksty, video, bezpłatne materiały, itp.). Administrator nie wyraża
						zgody na kopiowanie tychże treści w całości lub części bez jego
						wyraźnej, uprzedniej zgody.
					</p>
					<p>
						Treści umieszczone na Stronie są aktualne na dzień ich
						zamieszczenia, chyba że wskazano inaczej.
					</p>
				</div>
			</main>
		</Layout>
	);
}
