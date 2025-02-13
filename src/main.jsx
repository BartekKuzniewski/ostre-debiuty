import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage.jsx';
import { Courses } from './views/Courses/Courses.jsx';
import { ShoppingCart } from './views/ShoppingCart/ShoppingCart.jsx';
import { AboutUs } from './views/AboutUs/AboutUs.jsx';
import { Coaches } from './views/Coaches/Coaches.jsx';
import { CoachPage } from './views/CoachPage/CoachPage.jsx';
import { Contact } from './views/Contact/Contact.jsx';
import { LogIn } from './views/LogIn/LogIn.jsx';
import { CoursesPage } from './views/CoursesPage/CoursesPage.jsx';
import { Rules } from './views/Rules/Rules.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/kursy',
		element: <Courses />,
	},
	{
		path: '/kursy/:name',
		element: <CoursesPage />,
	},
	{
		path: '/koszyk',
		element: <ShoppingCart />,
	},
	{
		path: '/o-nas',
		element: <AboutUs />,
	},
	{
		path: '/trenerzy',
		element: <Coaches />,
	},
	{
		path: '/trenerzy/:name',
		element: <CoachPage />,
	},
	{
		path: '/kontakt',
		element: <Contact />,
	},
	{
		path: '/zaloguj-sie',
		element: <LogIn />,
	},
	{
		path: '/regulamin',
		element: <Rules />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
);
