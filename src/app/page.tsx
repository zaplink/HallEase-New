import ContactUs from './front/contacts/ContactUs';
import HomePage from './front/home/HomePage';
import Reservations from './front/publicReservations/Reservations';
import LoginPage from './login/page';

export default function Home() {
	return (
		<div style={{ position: 'relative', height: '100vh' }}>
			<HomePage />
			<LoginPage />
			<Reservations />
			<ContactUs />
		</div>
	);
}
