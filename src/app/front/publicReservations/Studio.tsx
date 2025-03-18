import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { StudioForm } from './studioForm';

const Studio = () => {
	return (
		<div className='bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-7xl lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2'>
			{/* Left Section - Image */}
			<div className='relative h-100 lg:h-auto'>
				<Image
					src='/studio.jpg'
					alt='Signup'
					layout='fill'
					objectFit='cover'
					className='rounded-l-2xl'
				/>
			</div>

			{/* Right Section - Signup Form */}
			<Card className='p-8 rounded-none overflow-y-auto'>
				<p className='text-gray-500 text-lg'>
					Your Creativity, Our Space.
				</p>
				<h2 className='text-2xl font-bold text-gray-800'>
					Book the Studio Today!
				</h2>

				<CardContent className='space-y-4 mt-5'>
					<StudioForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default Studio;
