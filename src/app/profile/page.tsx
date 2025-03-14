'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProtectedPage from '@/layouts/ProtectedPage';
import { RootState, AppDispatch } from '@/redux/store';
import { fetchUserData } from '@/redux/authSlice';

export default function Profile() {
	const dispatch = useDispatch<AppDispatch>();

	// Redux state
	const { user, loading, error } = useSelector(
		(state: RootState) => state.auth
	);

	// State for form fields
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Fetch user data on mount
	useEffect(() => {
		dispatch(fetchUserData());
	}, [dispatch]);

	// Update state when Redux profile data is available
	useEffect(() => {
		if (user) {
			setName(user.full_name || '');
			setEmail(user.email || '');
		}
	}, [user]);

	// Handle profile update (dummy function)
	const handleProfileUpdate = () => {
		console.log('Updating profile:', { name, email });
		// Add API call here if needed
	};

	// Handle password change (dummy function)
	const handleChangePassword = () => {
		console.log('Changing password:', {
			oldPassword,
			newPassword,
			confirmPassword,
		});
		// Add API call here if needed
	};

	return (
		<ProtectedPage>
			<SidebarLayout>
				<div className='pl-2 pt-4'>
					{/* Profile Section */}
					<div className='mb-12'>
						<Label className='font-bold text-xl'>
							Profile Information
						</Label>
						<Separator className='my-3' />

						{loading && <p className='text-blue-500'>Loading...</p>}
						{error && <p className='text-red-500'>{error}</p>}

						{!loading && !error && user && (
							<>
								<div className='my-6'>
									<Label className='font-semibold mb-1'>
										Name
									</Label>
									<Input
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										className='w-2/5'
									/>
								</div>

								<div className='my-6'>
									<Label className='font-semibold mb-1'>
										Email
									</Label>
									<Input
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className='w-2/5'
									/>
								</div>

								<div className='my-6'>
									<Button
										variant='default'
										onClick={handleProfileUpdate}
									>
										Update Profile
									</Button>
								</div>
							</>
						)}
					</div>

					{/* Password Section */}
					<div className='mb-12'>
						<Label className='font-bold text-xl'>
							Password & Authentication
						</Label>
						<Separator className='my-3' />

						<div className='my-6'>
							<Label className='font-semibold mb-1'>
								Old Password
							</Label>
							<Input
								type='password'
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
								className='w-2/5'
							/>
						</div>

						<div className='my-6'>
							<Label className='font-semibold mb-1'>
								New Password
							</Label>
							<Input
								type='password'
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								className='w-2/5'
							/>
						</div>

						<div className='my-6'>
							<Label className='font-semibold mb-1'>
								Re-enter New Password
							</Label>
							<Input
								type='password'
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								className='w-2/5'
							/>
						</div>

						<div className='my-6'>
							<Button
								variant='default'
								onClick={handleChangePassword}
							>
								Change Password
							</Button>
						</div>
					</div>

					{/* Activities Section */}
					<div className='mb-12'>
						<Label className='font-bold text-xl'>Activities</Label>
						<Separator className='my-3' />

						<div className='my-6 flex flex-col'>
							<Label className='font-semibold mb-1'>
								Profile Creation
							</Label>
							<Label className='font-base my-1 italic'>
								YYYY-MM-DD HH:MM
							</Label>
						</div>
						<div className='my-6 flex flex-col'>
							<Label className='font-semibold mb-1'>
								Last Sign In
							</Label>
							<Label className='font-base my-1 italic'>
								YYYY-MM-DD HH:MM
							</Label>
						</div>
					</div>
				</div>
			</SidebarLayout>
		</ProtectedPage>
	);
}
