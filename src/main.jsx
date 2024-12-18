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
import { Contact } from './views/Contact/Contact.jsx';
import { LogIn } from './views/LogIn/LogIn.jsx';

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
		path: '/kontakt',
		element: <Contact />,
	},
	{
		path: '/zaloguj-sie',
		element: <LogIn />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
);
