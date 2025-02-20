import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return null;
};

export function Layout({ children }) {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
