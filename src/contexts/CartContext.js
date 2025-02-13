import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState(() => {
		const storedCart = localStorage.getItem('cart');
		return storedCart ? JSON.parse(storedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	function addToCart(course, setCart) {
		setCart((prevCart) => {
			if (prevCart.find((item) => item.id === course.id)) {
				return prevCart;
			}
			return [...prevCart, course];
		});
	}

	function removeFromCart(id, setCart) {
		setCart((prevCart) => {
			prevCart.filter((item) => item.id !== id);
		});
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
}
