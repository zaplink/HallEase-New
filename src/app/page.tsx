import LoginPage from './front/users/LoginPage';
import ContactUs from './front/contacts/ContactUs';
import HomePage from './front/home/HomePage';

export default function Home() {
	return (
		<div style={{ position: 'relative', height: '100vh' }}>
			<HomePage />
			<LoginPage />
			{/* <Reservations/> */}
			<ContactUs />
		</div>
	);
}
