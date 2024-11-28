import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
);
