import React from 'react';
// import ReservationForm from './ReservationForm';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

const Reservations = () => {
	return (
		<div
			id='public'
			className='min-h-screen flex items-center justify-center text-white relative bg-gradient-to-b from-blue-200 via-white to-gray-200'
		>
			{/* <div className='bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-7xl lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2'> */}
			{/* Left Section - Image */}
			{/* <div className='relative h-100 lg:h-auto'>
					<Image
						src='/auditorium.jpg' // Change to your actual image path
						alt='Signup'
						layout='fill'
						objectFit='cover'
						className='rounded-l-2xl'
					/>
				</div> */}

			{/* Right Section - Signup Form */}
			{/* <Card className='p-8'>
					<h2 className='text-2xl font-bold text-gray-800'>
						Sign Up
					</h2>
					<p className='text-gray-500'>Create an Account</p>

					<CardContent className='space-y-4 mt-4'>
						<div>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Enter preferred username'
							/>
						</div>

						<div>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								placeholder='Enter your email'
							/>
						</div>

						<div>
							<Label htmlFor='mobile'>Mobile</Label>
							<Input
								id='mobile'
								type='tel'
								placeholder='Enter your mobile number'
							/>
						</div>

						<div>
							<Label htmlFor='password'>Password</Label>
							<Input
								id='password'
								type='password'
								placeholder='**********'
							/>
						</div>

						<Button className='w-full bg-blue-600 hover:bg-blue-700'>
							Sign Up
						</Button>

						<div className='flex items-center gap-2 text-gray-500'>
							<span className='flex-1 border-t'></span>
							<span>or</span>
							<span className='flex-1 border-t'></span>
						</div>

						<Button variant='outline' className='w-full'>
							Already have an account
						</Button>
					</CardContent>
				</Card> */}
			{/* </div> */}
		</div>
	);
};

export default Reservations;
