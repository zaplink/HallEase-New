'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function TestComponent() {
	const user = useSelector((state: RootState) => state.auth.user);

	if (!user) {
		return <p>Loading user data...</p>;
	}

	console.log('User Data from Redux:', user);

	return (
		<div>
			<h2>Welcome, {user.full_name}!</h2>
			<img src={user.pro_pic} alt='Profile' width={100} height={100} />
			<p>Email: {user.email}</p>
			<p>Role: {user.role}</p>
			<p>Permissions: {user.permissions.join(', ')}</p>
		</div>
	);
}
