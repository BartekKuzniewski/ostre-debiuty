import styles from './TeamMember.module.css';
import szymon from '../../assets/szymon.svg';
import patryk from '../../assets/patryk.svg';
import igor from '../../assets/igor.svg';
import julia from '../../assets/julia.svg';

const members = [
	{
		name: 'Patryk Chylewski',
		ranking: '2007',
		role: 'twórca',
		img: patryk,
	},
	{
		name: 'Igor Janik',
		ranking: '2552',
		role: 'twórca / trener',
		img: igor,
	},
	{
		name: 'Szymon Gumularz',
		ranking: '2400',
		role: 'trener',
		img: szymon,
	},
	{
		name: 'Julia Antolak',
		ranking: '2313',
		role: 'trener',
		img: julia,
	},
];

export function TeamMember() {
	return (
		<ul className={styles.members}>
			{members.map((member) => (
				<li key={member.name} className={styles.member}>
					<div className={styles.memberImg}>
						<img src={member.img} alt={member.name} />
					</div>
					<div className={styles.memberInfo}>
						<h3 className={styles.memberName}>{member.name}</h3>
						<div className={styles.memberDetails}>
							<div className={styles.memberRanking}>
								<p>Ranking FIDE</p>
								<span>{member.ranking}</span>
							</div>

							<div className={styles.memberRole}>
								<p>{member.role}</p>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
