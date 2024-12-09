import { Trainers } from '../Trainers/Trainers';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './KnowUsBetter.module.css';

export function KnowUsBetter() {
	return (
		<section className={styles.knowUs}>
			<Wrapper>
				<div className={styles.knowUsHeading}>
					<svg
						width='65'
						height='64'
						viewBox='0 0 65 64'
						fill='#f2f2f2'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M49.9228 53.5856C49.9228 52.1302 49.9228 50.689 49.9228 49.2478C49.9145 47.2176 48.8395 45.8854 46.8555 45.4991C46.4917 45.4291 46.4241 45.2383 46.3815 44.9527C45.8268 41.4185 44.4437 38.241 42.0994 35.5447C41.0446 34.3311 39.7954 33.2774 38.5782 32.2167C37.1772 31.0243 35.9726 29.6188 35.0084 28.052C36.305 27.5992 37.5803 27.5577 38.7181 28.2665C39.7113 28.884 40.6144 29.6721 41.4867 30.4555C42.3293 31.2188 43.2313 31.7924 44.3785 31.9299C45.9821 32.1278 47.3273 31.6028 48.4603 30.4828C49.3294 29.6223 50.1954 28.7564 51.0582 27.8849C52.6973 26.2256 52.6997 24.1563 51.0523 22.4863C49.5961 21.0096 48.1292 19.5431 46.6517 18.0869C46.337 17.7954 46.1391 17.3995 46.0947 16.9729C45.6526 13.5038 42.8947 10.6262 39.4576 9.98026C39.3806 9.96604 39.3047 9.94589 39.14 9.91034V9.29404C39.14 7.37878 39.14 5.46234 39.14 3.54589C39.14 2.46737 38.7098 2.03715 37.6241 2.04189C35.3924 2.05137 33.1572 1.99448 30.9314 2.11063C27.8073 2.27419 24.9711 3.41434 22.3412 5.04752C18.18 7.63478 15.0144 11.1311 12.8988 15.5649C11.7136 18.0537 11.0973 20.6908 10.6932 23.3871C9.89318 28.7311 10.5676 33.9352 12.2197 39.0315C12.4627 39.8303 12.8182 40.0994 13.6478 40.1077C15.5038 40.1077 17.361 40.1183 19.2182 40.1006C19.601 40.1006 19.7515 40.206 19.8523 40.5936C20.228 42.0466 20.3678 43.5032 20.1273 44.9918C20.0787 45.294 19.9921 45.4659 19.6532 45.5358C17.8327 45.9151 16.7566 47.2531 16.7293 49.1151C16.7143 50.4583 16.7143 51.8015 16.7293 53.1447C16.7353 53.5003 16.6238 53.6567 16.292 53.7823C13.4333 54.8632 11.6603 56.9041 10.993 59.8872C10.8823 60.4081 10.8204 60.9382 10.8081 61.4706C10.7856 62.2078 11.2609 62.6866 12.0052 62.7447C12.1628 62.7577 12.3216 62.7447 12.4793 62.7447H54.1468C55.5335 62.7447 55.953 62.2706 55.799 60.8923C55.415 57.4331 53.606 55.0627 50.372 53.7811C50.2274 53.7207 50.0852 53.6555 49.9228 53.5856ZM22.4478 45.4078C23.0831 42.3263 22.0117 39.5376 21.1501 36.7121C20.471 34.484 19.8238 32.2499 19.6259 29.9127C19.3664 26.8419 19.6259 23.796 20.6784 20.9183C22.3815 16.2523 25.8624 13.5026 30.6612 12.385C31.7753 12.1254 32.023 11.8374 32.023 10.6783C32.023 9.3936 32.0111 8.11004 32.023 6.8253C32.0396 5.61285 32.8052 4.61611 33.9548 4.47982C34.8627 4.37197 35.793 4.4573 36.759 4.4573V5.12693C36.759 7.00426 36.759 8.8816 36.759 10.7577C36.759 11.726 37.1809 12.1622 38.1456 12.2309C41.3006 12.4549 43.5406 14.6629 43.7753 17.8013C43.8073 18.3578 44.0537 18.8803 44.4627 19.2591C46.1089 20.8804 47.7397 22.5195 49.3693 24.1598C50.0911 24.8863 50.0994 25.4896 49.3942 26.2078C48.5231 27.0967 47.6473 27.9856 46.7524 28.8472C45.6609 29.9032 44.3216 29.8843 43.2253 28.8223C42.8283 28.4372 42.4514 28.0306 42.0401 27.662C40.3264 26.1308 38.3744 25.1281 36.0194 25.4351C34.9456 25.5761 33.8861 25.9862 32.8704 26.3832C31.5465 26.8976 30.263 26.9118 28.9521 26.3951C28.5302 26.2291 28.1225 26.0289 27.6887 25.8937C27.0689 25.7006 26.4846 25.9601 26.2393 26.4863C26.1721 26.6196 26.132 26.7649 26.1211 26.9138C26.1103 27.0627 26.129 27.2122 26.1761 27.3538C26.2232 27.4955 26.2979 27.6264 26.3958 27.7391C26.4937 27.8518 26.6129 27.944 26.7465 28.0105C28.4615 28.9136 30.2665 29.4327 32.2197 29.0238C32.6547 28.9337 32.8585 29.0487 33.0683 29.3983C34.2108 31.2946 35.7077 32.8721 37.3871 34.3133C38.6244 35.374 39.8345 36.5083 40.8502 37.7752C42.6221 39.9844 43.6307 42.5693 44.0573 45.409L22.4478 45.4078ZM53.2923 60.3577H13.3515C13.3514 60.2943 13.3561 60.2309 13.3658 60.1681C14.0081 57.454 16.3347 55.6537 19.268 55.6383C22.2013 55.6229 25.1536 55.6383 28.0976 55.6383C28.2751 55.6443 28.4527 55.6407 28.6298 55.6277C29.2887 55.5566 29.7545 55.0754 29.7652 54.4697C29.7758 53.8641 29.2911 53.3426 28.6049 53.2763C28.4283 53.2597 28.2493 53.268 28.0716 53.268H19.0997C19.0997 51.9524 19.0997 50.7115 19.0997 49.4754C19.0997 48.193 19.4754 47.8161 20.759 47.8161H42.0413C43.4233 47.8161 44.8064 47.8066 46.1895 47.8161C47.0795 47.8244 47.5311 48.2902 47.5489 49.1767C47.5619 49.7894 47.5489 50.4022 47.5489 51.0149V53.2668C44.4804 53.2668 41.5044 53.2668 38.5178 53.2668C38.2623 53.2592 38.0069 53.2823 37.7569 53.3355C37.5046 53.3973 37.2811 53.544 37.1241 53.7509C36.967 53.9578 36.8858 54.2125 36.8941 54.4721C36.9308 55.0137 37.2046 55.4108 37.7427 55.5589C37.992 55.6167 38.2478 55.6414 38.5035 55.6324C41.2887 55.6324 44.0739 55.6324 46.8591 55.6395C47.4117 55.6347 47.9641 55.6668 48.5124 55.7355C50.8911 56.065 52.9865 58.1011 53.2923 60.3577ZM29.6123 10.1723C29.412 10.2315 29.2425 10.2908 29.073 10.3346C24.7447 11.5886 21.444 14.1675 19.3118 18.132C17.5447 21.4173 17.1785 25.0345 17.1904 28.6955C17.2034 31.5862 17.9145 34.3595 18.7655 37.0997C18.8259 37.2929 18.871 37.4908 18.929 37.7077H14.3068C12.3169 31.5447 12.1201 26.0929 13.8553 19.8552C15.6875 13.2703 19.9353 8.64219 26.0923 5.75152C27.3811 5.1401 28.7617 4.74489 30.1788 4.58174C29.2923 6.40811 29.8126 8.29848 29.6123 10.1723Z'
							fill='#f2f2f2'
						></path>
						<path
							d='M38.0755 20.5351C38.4701 20.5351 38.8672 20.5576 39.2607 20.5292C39.9493 20.4794 40.4352 19.9721 40.4316 19.344C40.4281 18.7158 39.9398 18.205 39.2464 18.1778C38.4583 18.1458 37.6666 18.1446 36.8761 18.1778C36.5654 18.1818 36.2688 18.3076 36.05 18.5282C35.8313 18.7487 35.7078 19.0464 35.7063 19.357C35.7063 19.9816 36.1993 20.4794 36.8915 20.5268C37.2838 20.5576 37.6808 20.5363 38.0755 20.5351Z'
							fill='#f2f2f2'
						></path>
					</svg>
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
						<Trainers />
						<Trainers />
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
