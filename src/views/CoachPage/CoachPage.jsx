import { useParams } from 'react-router-dom';
import { coachesData } from '../../constants/coachesData';
import { Layout } from '../../components/Layout/Layout';

export function CoachPage() {
	console.log(coachesData);
	const { name } = useParams();
	const coach = coachesData.find((c) => c.slug === name);

    
	if (!coach) {
		return <h2>Nie znaleziono trenera</h2>;
	}

	return (
		<Layout>
			<div>
				<h1>{coach.name}</h1>
				<img src={coach.image} alt={coach.name} />
				<p>{coach.description}</p>
			</div>
		</Layout>
	);
}
