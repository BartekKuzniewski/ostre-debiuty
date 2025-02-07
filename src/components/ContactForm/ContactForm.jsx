import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { Button } from '../Button/Button';

// const key = import.meta.env.VITE_PUBLIC_KEY;

export function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});
	const [showModal, setShowModal] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (!formValidation()) return;

		const serviceId = 'service_uafw0ad';
		const temaplateId = 'template_fnvvbxl';
		const publicKey = 'KFNIyBty3QqB9mJLR';

		const templateData = {
			from_name: name,
			from_email: email,
			to_name: 'Ostre Debiuty',
			message: message,
		};

		emailjs
			.send(serviceId, temaplateId, templateData, publicKey)
			.then((response) => {
				console.log('Email seny sucessfull!!', response);
				setShowModal(true);
				setName('');
				setEmail('');
				setMessage('');
				setErrors({});
			})
			.catch((error) => console.error('Error sendig email:', error));

		console.log(name, email, message);
	}

	function formValidation() {
		const newErrors = {};
		if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			newErrors.email = 'Podaj poprawny adres email';
		}
		if (name.trim().length < 3) {
			newErrors.name = 'Imię musi mieć co najmniej 3 znaki';
		}
		if (message.trim().length < 3) {
			newErrors.message = 'Wiadomość musi mieć co najmniej 3 znaki';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	return (
		<div className={styles.contactForm}>
			<h3 className={styles.title}>Skontakuj się z nami</h3>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formField}>
					<label htmlFor='name' className={styles.label}>
						Twoje Imię
					</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Jak masz na imię?'
						className={`${styles.input} ${errors.name ? styles.error : ''}`}
					/>
					{errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
				</div>
				<div className={styles.formField}>
					<label htmlFor='mail' className={styles.label}>
						Twój E-mail
					</label>
					<input
						type='text'
						id='name'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Jaki masz e-mail?'
						className={`${styles.input} ${errors.email ? styles.error : ''}`}
					/>
					{errors.email && (
						<p className={styles.errorMessage}>{errors.email}</p>
					)}
				</div>
				<div className={styles.formField}>
					<label htmlFor='message' className={styles.label}>
						Twoja wiadomość
					</label>
					<textarea
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder='O co chcesz zapytać?'
						className={`${styles.textarea} ${
							errors.message ? styles.error : ''
						}`}
					></textarea>
					{errors.message && (
						<p className={styles.errorMessage}>{errors.message}</p>
					)}
				</div>
				<Button type='submit' bgColor='#806e2d' hoverColor='#978130'>Wyślij</Button>
		
			</form>

			{showModal && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<p>Email został wysłany pomyślnie!</p>
						<button
							className={styles.button}
							onClick={() => setShowModal(false)}
						>
							Zamknij
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
