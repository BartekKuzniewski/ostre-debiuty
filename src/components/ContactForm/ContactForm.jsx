import styles from './ContactForm.module.css';

export function ContactForm() {
	return (
		<div className={styles.contactForm}>
			<h3 className={styles.title}>Skontakuj się z nami</h3>
			<form className={styles.form}>
				<div className={styles.formField}>
					<label htmlFor='name' className={styles.label}>
						Twoje Imię
					</label>
					<input
						type='text'
						id='name'
						placeholder='Jak masz na imię?'
						className={styles.input}
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor='mail' className={styles.label}>
						Twój E-mail
					</label>
					<input
						type='text'
						id='name'
						placeholder='Jaki masz e-mail?'
						className={styles.input}
					/>
				</div>
				<div className={styles.formField}>
					<label htmlFor='message' className={styles.label}>
						Twoja wiadomość
					</label>
					<textarea
						id='message'
						placeholder='O co chcesz zapytać?'
						className={styles.textarea}
					></textarea>
				</div>
				<button type='submit' className={styles.button}>
					Wyślij
				</button>
			</form>
		</div>
	);
}

// import React from "react";
// import styles from "./ContactForm.module.css";

// const ContactForm = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Get in Touch</h2>
//       <h1 className={styles.heading}>Contact.</h1>
//       <form className={styles.form}>
//         <label htmlFor="name" className={styles.label}>
//           Your Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           placeholder="What's your name?"
//           className={styles.input}
//         />

//         <label htmlFor="email" className={styles.label}>
//           Your Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder="What's your email?"
//           className={styles.input}
//         />

//         <label htmlFor="message" className={styles.label}>
//           Your Message
//         </label>
//         <textarea
//           id="message"
//           placeholder="What do you want to say?"
//           className={styles.textarea}
//         ></textarea>

//         <button type="submit" className={styles.button}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
