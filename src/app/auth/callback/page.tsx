'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchUserData } from '@/redux/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { clearAuth } from '@/redux/authSlice';
import Loading from '@/components/custom/Loading';

export default function CallbackPage() {
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((state: RootState) => state.auth.user);

	useEffect(() => {
		dispatch(clearAuth());
		dispatch(fetchUserData());
	}, [dispatch]);

	useEffect(() => {
		if (user) router.push('/dashboard');
	}, [user, router]);

	return <Loading className='mt-20 mx-auto' />;

	// return <p>Processing login...</p>;
}
