import { Card } from '../Card/Card';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './OurCourses.module.css';
import hallowenGambit from '../../assets/hallowen-gambit.svg';
import ruyLopez from '../../assets/ruy-lopez.svg';
import smazonaWatrobka from '../../assets/smazona-watrobka.svg';
import twoKnightsDefense from '../../assets/two-knights-defense.svg';
// const card = [
// 	{
// 		img: hallowenGambit,
// 		imgAlt: 'Król i skoczek w asyście pionów',
// 		title: 'kurs hallowen gambit',
// 		description:
// 			'W tym kursie dowiesz się wszystkich informacji, które pozwolą Ci odnaleźć się w każdej sytuacji związanej z Halloween Gambit. Kurs dla szachistów na każdym poziomie.',
// 		price: '99zł',
// 	},
// ];

export function OurCourses() {
	return (
		<section className={styles.ourCourses}>
			<Wrapper>
				<div className={styles.ourCoursesHeading}>
					<svg
						width='65'
						height='64'
						viewBox='0 0 65 64'
						fill='#f2f2f2'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M24.9418 26.1984C23.0516 25.788 21.7954 24.7709 21.5444 22.8676C21.291 20.9357 22.2212 19.6021 23.9235 18.7754C20.1275 12.6192 23.023 6.54638 26.499 4.02444C30.6221 1.035 36.162 1.21344 40.0258 4.53002C43.7219 7.70385 45.2505 13.5709 41.9696 18.754C42.1207 18.8396 42.2682 18.9276 42.4181 19.0085C43.8456 19.783 44.601 21.2937 44.3786 22.952C44.2677 23.6923 43.9369 24.3821 43.429 24.9319C42.9212 25.4818 42.2598 25.8662 41.5307 26.0354C41.0703 26.1389 40.9954 26.3412 41.0025 26.7587C41.1047 33.3998 42.6864 39.9346 45.6324 45.8873C45.7857 46.1717 46.0246 46.4006 46.3152 46.5416C48.7586 47.6789 50.3229 49.5275 50.9165 52.1624C50.9974 52.5193 51.1545 52.6383 51.4911 52.6989C52.6132 52.9023 53.6305 53.487 54.3712 54.354C55.1119 55.221 55.5304 56.3173 55.5559 57.4573C55.5845 58.8051 55.5726 60.1541 55.5619 61.5019C55.5548 62.3346 55.0861 62.7879 54.2724 62.8105C53.8953 62.82 53.5194 62.8105 53.1423 62.8105H12.0348C10.6941 62.8105 10.3384 62.4655 10.3551 61.1189C10.3717 59.6331 10.292 58.133 10.474 56.6686C10.731 54.6463 12.3881 53.0653 14.3878 52.7025C14.7446 52.6371 14.9136 52.5193 15.0004 52.1351C15.5952 49.518 17.15 47.6908 19.5673 46.5559C19.8599 46.4202 20.1028 46.1965 20.262 45.9159C22.811 40.7951 24.3402 35.2277 24.7646 29.5233C24.8514 28.4206 24.8847 27.3143 24.9418 26.1984ZM17.3867 52.5871H18.0838C21.1371 52.5871 24.1904 52.5871 27.2437 52.5871C27.4804 52.5784 27.7172 52.6012 27.9479 52.6549C28.2192 52.7274 28.4545 52.8966 28.6097 53.1306C28.7648 53.3647 28.829 53.6473 28.7901 53.9254C28.7587 54.1946 28.6348 54.4445 28.4395 54.6324C28.2442 54.8203 27.9897 54.9345 27.7195 54.9556C27.5216 54.9693 27.323 54.9729 27.1247 54.9663C23.2387 54.9663 19.3527 54.9663 15.4667 54.9663C14.1415 54.9663 13.0245 55.7074 12.8496 56.9351C12.6902 58.0688 12.8163 59.2429 12.8163 60.3968H53.1898C53.1898 59.4451 53.2029 58.5125 53.1898 57.5858C53.1637 56.1131 52.0597 55.0091 50.5811 54.9687C50.066 54.9544 49.5497 54.9687 49.0346 54.9687C45.5451 54.9687 42.0557 54.9687 38.5662 54.9687C37.7989 54.9687 37.3635 54.6808 37.1946 54.0836C36.9674 53.2795 37.5812 52.5943 38.5555 52.5931C41.6683 52.5867 44.7818 52.5867 47.8962 52.5931H48.5671C48.5314 52.4087 48.5183 52.2933 48.485 52.1827C47.7796 49.8427 45.6621 48.3141 43.0878 48.3117C36.3468 48.3054 29.6058 48.3054 22.8648 48.3117C22.4488 48.3133 22.0337 48.3507 21.6241 48.4235C19.5411 48.7816 17.671 50.6064 17.3867 52.5871ZM27.2996 26.1865C27.2639 33.054 25.796 39.6087 22.9397 45.898H42.982C40.1404 39.7132 38.6527 32.9928 38.6186 26.1865H27.2996ZM32.9287 18.5505C34.8119 18.5505 36.695 18.5648 38.5769 18.5339C38.876 18.5195 39.1584 18.392 39.3668 18.177C40.9918 16.2633 41.6401 14.0559 41.3118 11.5546C41.0706 9.81551 40.2934 8.19486 39.0884 6.91799C37.8834 5.64112 36.3104 4.77151 34.5882 4.43009C31.0884 3.72705 27.478 5.36749 25.6663 8.48422C24.7822 9.98902 24.3921 11.7331 24.5509 13.4711C24.7097 15.2092 25.4093 16.8537 26.5513 18.1734C26.76 18.39 27.0423 18.5203 27.3424 18.5386C29.2041 18.5648 31.067 18.5505 32.9287 18.5505ZM32.9014 23.7847C35.4174 23.7847 37.9345 23.7847 40.4517 23.7847C41.4581 23.7847 42.0803 23.1745 42.0339 22.2704C41.991 21.4377 41.3808 20.9333 40.3934 20.9321C36.1902 20.9321 31.987 20.9321 27.7838 20.9321C26.951 20.9321 26.1183 20.9131 25.2856 20.9392C24.372 20.969 23.782 21.678 23.8914 22.5654C23.9854 23.3149 24.5742 23.7836 25.4617 23.7859C27.9447 23.7899 30.4246 23.7895 32.9014 23.7847Z'
							fill='#f2f2f2'
						></path>
					</svg>
					<h2>Nasze Kursy</h2>
				</div>
				<div className={styles.cards}>
					<Card
						img={hallowenGambit}
						imgAlt='Król i skoczek w asyście pionów'
						title='kurs hallowen gambit'
						price='99zł'
						description='W tym kursie dowiesz się wszystkich informacji, które pozwolą Ci odnaleźć się w każdej sytuacji związanej z Halloween Gambit. Kurs dla szachistów na każdym poziomie.'
					/>
					<Card
						img={smazonaWatrobka}
						imgAlt='Król w asyście piona i wieży'
						title='kurs ataku smażonej wątróbki'
						price='129zł'
						description='W tym kursie dowiesz się wszystkich informacji, które pozwolą Ci nienagannie wykonać Atak smażonej wątróbki. Kurs dla szachistów na każdym poziomie.'
					/>
					<Card
						img={twoKnightsDefense}
						imgAlt='Król w asyście hetmana i piona'
						title='kurs two knights defense'
						price='119zł'
						description='Ten kurs pomoże Ci dogłębnie poznać połączenie technik Two Knights Defense, Max Lange Attack. Kurs dla szachistów na każdym poziomie.'
					/>
					<Card
						img={ruyLopez}
						imgAlt='Król w asyście pionów'
						title='KURS OTWARCIA RUY LÓPEZ: JAENISCH GAMBIT'
						price='199zł'
						description='Ten kurs pozwoli ci poznać tajniki tego otwarcia. Dowiesz się jak reagować na sytuację na szachownicy oraz na co uważać, żeby samemu nie dać wpędzić się w pułapkę.'
					/>
				</div>
			</Wrapper>
		</section>
	);
}
