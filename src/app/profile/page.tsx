'use client';

import { useState, useEffect } from 'react';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { useProfile } from '@/hooks/useProfile';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Profile() {
	// const { profile, loading } = useProfile();
	const { profile } = useProfile();

	// State for form fields
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Update state when profile data is available
	useEffect(() => {
		if (profile) {
			setName(profile.full_name || '');
			setEmail(profile.email || '');
		}
	}, [profile]);

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
		<SidebarLayout>
			<div className='pl-2 pt-4'>
				{/* Profile Section */}
				<div className='mb-12'>
					<Label className='font-bold text-xl'>
						Profile Information
					</Label>
					<Separator className='my-3' />

					<div className='my-6'>
						<Label className='font-semibold mb-1'>Name</Label>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='w-2/5'
						/>
					</div>

					<div className='my-6'>
						<Label className='font-semibold mb-1'>Email</Label>
						<Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-2/5'
						/>
					</div>

					<div className='my-6'>
						<Button variant='default' onClick={handleProfileUpdate}>
							Update Profile
						</Button>
					</div>
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
							onChange={(e) => setConfirmPassword(e.target.value)}
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

				<div className='mb-12'>
					{/* Activities Section */}
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
	);
}
